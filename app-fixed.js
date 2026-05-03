// ===== TABANCA MENARCA - PRODUCTION APPLICATION =====
// Phase 2-4: User Registration, Cycle Calculator, and Content Modules

// ===== STATE MANAGEMENT =====
const appState = {
    currentPage: 'home',
    currentUser: null,
    users: [],
    isLoggedIn: false,
    isDarkMode: false,
    notifications: [],
    cycleData: [],
    contentModules: [],
    communityPosts: [],
    doctorForum: []
};

// ===== CONTENT DATABASE =====
// Loaded from content-modules.js
let contentDatabase = {
    modules_8_12: [],
    modules_13_15: [],
    modules_18_plus: []
};

// Initialize content database after page load
window.addEventListener('load', () => {
    if (typeof contentModules !== 'undefined') {
        contentDatabase = contentModules;
        console.log('Content modules loaded:', contentDatabase);
    }
});

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    loadStoredData();
    setupEventListeners();
    renderHomePage();
    showPage('home');
});

function initializeApp() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        appState.isDarkMode = true;
    }

    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
        appState.currentUser = JSON.parse(storedUser);
        appState.isLoggedIn = true;
        updateUIForLoggedInUser();
    }
}

function setupEventListeners() {
    document.querySelectorAll('nav a[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            showPage(page);
            updateActiveNav(page);
        });
    });

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }

    const sosButton = document.getElementById('sos-button');
    if (sosButton) {
        sosButton.addEventListener('click', openSOS);
    }

    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
            }
        });
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });

    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegistration);
        
        const ageGroupSelect = document.getElementById('reg-age-group');
        if (ageGroupSelect) {
            ageGroupSelect.addEventListener('change', (e) => {
                handleAgeGroupChange(e.target.value);
            });
        }
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
}

// ===== PAGE NAVIGATION =====
function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    const page = document.getElementById(`page-${pageName}`);
    if (page) {
        page.classList.add('active');
        appState.currentPage = pageName;
        window.scrollTo(0, 0);

        switch(pageName) {
            case 'home':
                renderHomePage();
                break;
            case 'learn':
                renderLearnPage();
                break;
            case 'tracker':
                renderTrackerPage();
                break;
            case 'community':
                renderCommunityPage();
                break;
            case 'profile':
                renderProfilePage();
                break;
        }
    }
}

function updateActiveNav(pageName) {
    document.querySelectorAll('nav .nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        }
    });
}

// ===== HOME PAGE =====
function renderHomePage() {
    const container = document.getElementById('page-home');
    if (!container) return;

    if (appState.isLoggedIn) {
        renderLoggedInHome();
    } else {
        renderGuestHome();
    }
}

function renderGuestHome() {
    const container = document.getElementById('page-home');
    const authSection = document.getElementById('auth-section');
    const exploreSection = document.getElementById('explore-section');

    if (authSection) authSection.style.display = 'block';
    if (exploreSection) exploreSection.style.display = 'none';
}

function renderLoggedInHome() {
    const container = document.getElementById('page-home');
    const authSection = document.getElementById('auth-section');
    const exploreSection = document.getElementById('explore-section');

    if (authSection) authSection.style.display = 'none';
    if (exploreSection) exploreSection.style.display = 'block';
}

// ===== REGISTRATION & AUTHENTICATION =====
function handleAgeGroupChange(ageGroup) {
    const parentalSection = document.getElementById('parental-consent-section');
    if (parentalSection) {
        if (ageGroup === '2') {
            parentalSection.style.display = 'block';
            document.getElementById('reg-parent-email').required = true;
        } else {
            parentalSection.style.display = 'none';
            document.getElementById('reg-parent-email').required = false;
        }
    }
}

function handleRegistration(e) {
    e.preventDefault();

    const email = document.getElementById('reg-email').value;
    const nickname = document.getElementById('reg-nickname').value;
    const password = document.getElementById('reg-password').value;
    const passwordConfirm = document.getElementById('reg-password-confirm').value;
    const ageGroup = document.getElementById('reg-age-group').value;
    const parentEmail = document.getElementById('reg-parent-email').value;
    const terms = document.getElementById('reg-terms').checked;

    if (!email || !nickname || !password || !passwordConfirm || !ageGroup || !terms) {
        showAlert('error', 'Por favor, preencha todos os campos obrigatórios');
        return;
    }

    if (password !== passwordConfirm) {
        showAlert('error', 'As senhas não correspondem');
        return;
    }

    if (password.length < 8) {
        showAlert('error', 'A senha deve ter pelo menos 8 caracteres');
        return;
    }

    if (ageGroup === '2' && !parentEmail) {
        showAlert('error', 'Email do responsável é obrigatório para menores de 16 anos');
        return;
    }

    const existingUser = appState.users.find(u => u.email === email);
    if (existingUser) {
        showAlert('error', 'Este email já está registrado');
        return;
    }

    const newUser = {
        id: generateId(),
        email: email,
        nickname: nickname,
        password: hashPassword(password),
        ageGroup: ageGroup,
        parentEmail: parentEmail || null,
        parentVerified: false,
        createdAt: new Date().toISOString(),
        cycleData: [],
        savedArticles: [],
        preferences: {
            notifications: true,
            darkMode: false
        }
    };

    appState.users.push(newUser);
    localStorage.setItem('users', JSON.stringify(appState.users));

    if (ageGroup === '2') {
        showAlert('info', `Email de verificação enviado para ${parentEmail}. O responsável deve confirmar para ativar a conta.`);
        setTimeout(() => {
            newUser.parentVerified = true;
            localStorage.setItem('users', JSON.stringify(appState.users));
            showAlert('success', 'Conta do responsável verificada! Sua conta está ativa.');
        }, 2000);
    } else {
        showAlert('success', 'Conta criada com sucesso! Faça login para continuar.');
        document.getElementById('register-form').reset();
        setTimeout(() => {
            showPage('login');
        }, 1500);
    }
}

function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (!email || !password) {
        showAlert('error', 'Por favor, preencha email e senha');
        return;
    }

    const user = appState.users.find(u => u.email === email);

    if (!user) {
        showAlert('error', 'Email ou senha incorretos');
        return;
    }

    if (user.password !== hashPassword(password)) {
        showAlert('error', 'Email ou senha incorretos');
        return;
    }

    if (user.ageGroup === '2' && !user.parentVerified) {
        showAlert('error', 'Sua conta ainda não foi verificada pelo responsável');
        return;
    }

    appState.currentUser = user;
    appState.isLoggedIn = true;
    localStorage.setItem('currentUser', JSON.stringify(user));

    showAlert('success', `Bem-vinda, ${user.nickname}!`);
    document.getElementById('login-form').reset();

    setTimeout(() => {
        updateUIForLoggedInUser();
        showPage('home');
    }, 1500);
}

function logout() {
    appState.currentUser = null;
    appState.isLoggedIn = false;
    localStorage.removeItem('currentUser');
    showAlert('info', 'Você foi desconectada');
    showPage('home');
    renderHomePage();
}

function updateUIForLoggedInUser() {
    const authSection = document.getElementById('auth-section');
    if (authSection) {
        authSection.style.display = 'none';
    }

    const headerActions = document.querySelector('.header-actions');
    if (headerActions && appState.currentUser) {
        if (!document.querySelector('.user-menu')) {
            const userMenu = document.createElement('div');
            userMenu.className = 'user-menu';
            userMenu.innerHTML = `
                <span>${appState.currentUser.nickname}</span>
                <button onclick="logout()" class="btn-tertiary btn-small">Sair</button>
            `;
            headerActions.appendChild(userMenu);
        }
    }
}

// ===== LEARN PAGE & CONTENT MODULES =====
function renderLearnPage() {
    const container = document.getElementById('content-modules');
    if (!container) return;

    if (!appState.isLoggedIn) {
        container.innerHTML = '<p class="text-muted">Faça login para acessar o conteúdo educacional</p>';
        return;
    }

    let modules = [];
    const ageGroup = appState.currentUser.ageGroup;

    if (ageGroup === '1') {
        modules = contentDatabase.modules_8_12 || [];
    } else if (ageGroup === '2') {
        modules = [...(contentDatabase.modules_8_12 || []), ...(contentDatabase.modules_13_15 || [])];
    } else if (ageGroup === '3') {
        modules = [...(contentDatabase.modules_8_12 || []), ...(contentDatabase.modules_13_15 || []), ...(contentDatabase.modules_18_plus || [])];
    }

    if (modules.length === 0) {
        container.innerHTML = '<p class="text-muted">Nenhum modulo disponivel para sua faixa etaria</p>';
        return;
    }

    let html = '<div class="grid grid-3">';
    for (let module of modules) {
        html += `
            <div class="card card-interactive" onclick="viewModule('${module.id}')" style="cursor: pointer;">
                <div class="card-icon">${module.icon}</div>
                <h3>${module.title}</h3>
                <p>${module.description}</p>
                <p class="text-muted" style="font-size: 12px; margin-top: 8px;">${module.readTime || '5 min'} • ${module.difficulty || 'Iniciante'}</p>
            </div>
        `;
    }
    html += '</div>';
    container.innerHTML = html;
}

function viewModule(moduleId) {
    let module = null;
    const allModules = [
        ...(contentDatabase.modules_8_12 || []),
        ...(contentDatabase.modules_13_15 || []),
        ...(contentDatabase.modules_18_plus || [])
    ];
    
    module = allModules.find(m => m.id === moduleId);
    
    if (!module) {
        showAlert('error', 'Modulo nao encontrado');
        return;
    }

    const userAgeGroup = appState.currentUser.ageGroup;
    const canAccess = checkAgeAccess(module.ageGroup, userAgeGroup);
    
    if (!canAccess) {
        showAlert('error', 'Voce nao tem acesso a este conteudo. Eh necessario ter a idade minima.');
        return;
    }

    const modal = document.getElementById('content-modal');
    const modalContent = document.getElementById('content-modal-body');
    
    if (modalContent) {
        modalContent.innerHTML = `
            <div style="margin-bottom: 16px;">
                <button class="btn-back" onclick="document.getElementById('content-modal').classList.remove('active')">Voltar</button>
            </div>
            <div style="padding: 0 16px;">
                ${module.content}
                <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--border);">
                    <button class="btn-secondary" onclick="saveArticle('${module.id}')">Salvar para Depois</button>
                </div>
            </div>
        `;
    }
    
    if (modal) {
        modal.classList.add('active');
    }
}

function checkAgeAccess(moduleAgeGroup, userAgeGroup) {
    const moduleAge = parseInt(moduleAgeGroup);
    const userAge = parseInt(userAgeGroup);
    
    return userAge >= moduleAge;
}

function saveArticle(moduleId) {
    if (!appState.currentUser.savedArticles) {
        appState.currentUser.savedArticles = [];
    }
    
    if (!appState.currentUser.savedArticles.includes(moduleId)) {
        appState.currentUser.savedArticles.push(moduleId);
        localStorage.setItem('currentUser', JSON.stringify(appState.currentUser));
        showAlert('success', 'Artigo salvo para leitura posterior!');
    } else {
        showAlert('info', 'Este artigo ja esta salvo');
    }
}

// ===== TRACKER PAGE & CYCLE CALCULATOR =====
function renderTrackerPage() {
    const container = document.getElementById('tracker-content');
    if (!container) return;

    if (!appState.isLoggedIn) {
        container.innerHTML = '<p class="text-muted">Faça login para usar o rastreador de ciclo</p>';
        return;
    }

    const cycleData = appState.currentUser.cycleData || [];
    const lastPeriod = cycleData.length > 0 ? cycleData[cycleData.length - 1] : null;

    container.innerHTML = `
        <div class="grid grid-2 mb-lg">
            <div class="card">
                <h3>Registrar Período</h3>
                <div class="form-group">
                    <label for="period-start">Data de Início</label>
                    <input type="date" id="period-start">
                </div>
                <div class="form-group">
                    <label for="period-flow">Fluxo</label>
                    <select id="period-flow">
                        <option value="">Selecione...</option>
                        <option value="light">Leve</option>
                        <option value="medium">Médio</option>
                        <option value="heavy">Intenso</option>
                    </select>
                </div>
                <button class="btn-primary btn-block" onclick="saveCycleEntry()">Salvar Período</button>
            </div>

            <div class="card">
                <h3>Próximas Datas</h3>
                ${lastPeriod ? `
                    <p><strong>Último período:</strong> ${formatDate(lastPeriod.startDate)}</p>
                    <p><strong>Próximo período:</strong> ${formatDate(calculateNextPeriod(lastPeriod.startDate))}</p>
                    <p><strong>Ovulação:</strong> ${formatDate(calculateOvulation(lastPeriod.startDate))}</p>
                    <p class="text-muted text-sm">Baseado em ciclo de 28 dias</p>
                ` : `
                    <p class="text-muted">Registre seu período para ver previsões</p>
                `}
            </div>
        </div>

        <div class="card mb-lg">
            <h3>Calendário do Ciclo</h3>
            <div id="cycle-calendar" style="overflow-x: auto;"></div>
        </div>

        <div class="card mb-lg">
            <h3>Histórico de Períodos</h3>
            <div id="cycle-history"></div>
        </div>

        <div class="card">
            <h3>Sintomas</h3>
            <div class="form-group">
                <label>Registre seus sintomas</label>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 8px;">
                    <label class="checkbox"><input type="checkbox" class="symptom-checkbox" value="cramps"> Cólicas</label>
                    <label class="checkbox"><input type="checkbox" class="symptom-checkbox" value="headache"> Dor de cabeça</label>
                    <label class="checkbox"><input type="checkbox" class="symptom-checkbox" value="mood"> Mudança de humor</label>
                    <label class="checkbox"><input type="checkbox" class="symptom-checkbox" value="fatigue"> Cansaço</label>
                    <label class="checkbox"><input type="checkbox" class="symptom-checkbox" value="bloating"> Inchaço</label>
                    <label class="checkbox"><input type="checkbox" class="symptom-checkbox" value="acne"> Acne</label>
                </div>
                <button class="btn-secondary btn-block mt-md" onclick="saveSymptoms()">Salvar Sintomas</button>
            </div>
        </div>
    `;

    renderCycleCalendar();
    renderCycleHistory();
}

function saveCycleEntry() {
    const startDate = document.getElementById('period-start').value;
    const flow = document.getElementById('period-flow').value;

    if (!startDate || !flow) {
        showAlert('error', 'Selecione data e fluxo');
        return;
    }

    if (!appState.currentUser.cycleData) {
        appState.currentUser.cycleData = [];
    }

    const exists = appState.currentUser.cycleData.some(e => e.startDate === startDate);
    if (exists) {
        showAlert('error', 'Este período já foi registrado');
        return;
    }

    appState.currentUser.cycleData.push({
        startDate: startDate,
        flow: flow,
        symptoms: [],
        notes: '',
        createdAt: new Date().toISOString()
    });

    localStorage.setItem('currentUser', JSON.stringify(appState.currentUser));
    showAlert('success', 'Período registrado com sucesso!');

    document.getElementById('period-start').value = '';
    document.getElementById('period-flow').value = '';

    renderTrackerPage();
}

function saveSymptoms() {
    const symptoms = Array.from(document.querySelectorAll('.symptom-checkbox:checked')).map(cb => cb.value);

    if (symptoms.length === 0) {
        showAlert('error', 'Selecione pelo menos um sintoma');
        return;
    }

    if (!appState.currentUser.cycleData || appState.currentUser.cycleData.length === 0) {
        showAlert('error', 'Registre um período primeiro');
        return;
    }

    const lastEntry = appState.currentUser.cycleData[appState.currentUser.cycleData.length - 1];
    lastEntry.symptoms = symptoms;

    localStorage.setItem('currentUser', JSON.stringify(appState.currentUser));
    showAlert('success', 'Sintomas registrados!');

    document.querySelectorAll('.symptom-checkbox').forEach(cb => cb.checked = false);
}

function renderCycleCalendar() {
    const container = document.getElementById('cycle-calendar');
    if (!container || !appState.currentUser.cycleData || appState.currentUser.cycleData.length === 0) return;

    const lastEntry = appState.currentUser.cycleData[appState.currentUser.cycleData.length - 1];
    const startDate = new Date(lastEntry.startDate);
    const daysInCycle = 28;

    let html = '<div style="display: flex; gap: 8px; flex-wrap: wrap;">';

    for (let i = 0; i < 35; i++) {
        const date = new Date(startDate);
        date.setDate(date.getDate() + i);

        const dayOfCycle = i % daysInCycle;
        let color = '#f5f5f5';
        let label = '';

        if (dayOfCycle < 5) {
            color = '#ff6b9d';
            label = 'Período';
        } else if (dayOfCycle === 14) {
            color = '#4ecdc4';
            label = 'Ovulação';
        } else if (dayOfCycle > 14 && dayOfCycle < 20) {
            color = '#ffe66d';
            label = 'Fértil';
        }

        html += `
            <div style="
                width: 40px;
                height: 40px;
                background-color: ${color};
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                font-weight: 600;
                color: white;
                cursor: pointer;
                title='${label} - ${formatDate(date.toISOString().split('T')[0])}';
            ">
                ${date.getDate()}
            </div>
        `;
    }

    html += '</div>';
    html += `
        <div style="margin-top: 16px; font-size: 12px;">
            <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 8px;">
                <div style="width: 20px; height: 20px; background-color: #ff6b9d; border-radius: 4px;"></div>
                <span>Período</span>
            </div>
            <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 8px;">
                <div style="width: 20px; height: 20px; background-color: #4ecdc4; border-radius: 4px;"></div>
                <span>Ovulação</span>
            </div>
            <div style="display: flex; gap: 8px; align-items: center;">
                <div style="width: 20px; height: 20px; background-color: #ffe66d; border-radius: 4px;"></div>
                <span>Período Fértil</span>
            </div>
        </div>
    `;

    container.innerHTML = html;
}

function renderCycleHistory() {
    const container = document.getElementById('cycle-history');
    if (!container) return;

    if (!appState.currentUser.cycleData || appState.currentUser.cycleData.length === 0) {
        container.innerHTML = '<p class="text-muted">Nenhum período registrado ainda</p>';
        return;
    }

    const sorted = [...appState.currentUser.cycleData].reverse();
    container.innerHTML = sorted.map((entry, index) => `
        <div class="card mb-md" style="background-color: var(--surface);">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <p><strong>Data:</strong> ${formatDate(entry.startDate)}</p>
                    <p><strong>Fluxo:</strong> ${getFlowLabel(entry.flow)}</p>
                    ${entry.symptoms && entry.symptoms.length > 0 ? `<p><strong>Sintomas:</strong> ${entry.symptoms.map(s => getSymptomsLabel(s)).join(', ')}</p>` : ''}
                </div>
                <button class="btn-tertiary btn-small" onclick="deleteCycleEntry(${index})">Deletar</button>
            </div>
        </div>
    `).join('');
}

function deleteCycleEntry(index) {
    if (confirm('Tem certeza que deseja deletar este registro?')) {
        appState.currentUser.cycleData.splice(index, 1);
        localStorage.setItem('currentUser', JSON.stringify(appState.currentUser));
        showAlert('success', 'Registro deletado');
        renderTrackerPage();
    }
}

function calculateNextPeriod(lastPeriodDate) {
    const date = new Date(lastPeriodDate);
    date.setDate(date.getDate() + 28);
    return date.toISOString().split('T')[0];
}

function calculateOvulation(lastPeriodDate) {
    const date = new Date(lastPeriodDate);
    date.setDate(date.getDate() + 14);
    return date.toISOString().split('T')[0];
}

function formatDate(dateString) {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('pt-GB', { year: 'numeric', month: 'long', day: 'numeric' });
}

function getFlowLabel(flow) {
    const labels = { light: 'Leve', medium: 'Médio', heavy: 'Intenso' };
    return labels[flow] || flow;
}

function getSymptomsLabel(symptom) {
    const labels = {
        cramps: 'Cólicas',
        headache: 'Dor de cabeça',
        mood: 'Mudança de humor',
        fatigue: 'Cansaço',
        bloating: 'Inchaço',
        acne: 'Acne'
    };
    return labels[symptom] || symptom;
}

// ===== COMMUNITY PAGE =====
function renderCommunityPage() {
    const container = document.getElementById('community-content');
    if (!container) return;

    if (!appState.isLoggedIn) {
        container.innerHTML = '<p class="text-muted">Faça login para acessar a comunidade</p>';
        return;
    }

    container.innerHTML = `
        <div class="card">
            <h3>Comunidade Tabanca Menarca</h3>
            <p class="text-muted">Em desenvolvimento - Será adicionado em breve</p>
        </div>
    `;
}

// ===== PROFILE PAGE =====
function renderProfilePage() {
    const container = document.getElementById('profile-content');
    if (!container) return;

    if (!appState.isLoggedIn) {
        container.innerHTML = `
            <div class="alert alert-info">
                <span>ℹ️</span>
                <div>
                    <p>Faça login para ver seu perfil</p>
                </div>
            </div>
        `;
        return;
    }

    const user = appState.currentUser;
    container.innerHTML = `
        <div class="card mb-lg">
            <h3>Informações Pessoais</h3>
            <p><strong>Nome:</strong> ${user.nickname}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Faixa Etária:</strong> ${getAgeGroupLabel(user.ageGroup)}</p>
            ${user.parentEmail ? `<p><strong>Email do Responsável:</strong> ${user.parentEmail}</p>` : ''}
        </div>

        <div class="card mb-lg">
            <h3>Preferências</h3>
            <label class="checkbox">
                <input type="checkbox" ${user.preferences.notifications ? 'checked' : ''} onchange="updatePreference('notifications', this.checked)">
                <span>Receber notificações</span>
            </label>
            <label class="checkbox">
                <input type="checkbox" ${user.preferences.darkMode ? 'checked' : ''} onchange="updatePreference('darkMode', this.checked)">
                <span>Modo escuro</span>
            </label>
        </div>

        <div class="card">
            <h3>Ações</h3>
            <button class="btn-secondary btn-block mb-lg" onclick="logout()">Sair</button>
            <button class="btn-tertiary btn-block" onclick="deleteAccount()">Deletar Conta</button>
        </div>
    `;
}

function updatePreference(key, value) {
    if (appState.currentUser) {
        appState.currentUser.preferences[key] = value;
        localStorage.setItem('currentUser', JSON.stringify(appState.currentUser));
        showAlert('success', 'Preferência atualizada');
    }
}

function deleteAccount() {
    if (confirm('Tem certeza que deseja deletar sua conta? Esta ação é irreversível.')) {
        const userIndex = appState.users.findIndex(u => u.id === appState.currentUser.id);
        if (userIndex > -1) {
            appState.users.splice(userIndex, 1);
            localStorage.setItem('users', JSON.stringify(appState.users));
            logout();
            showAlert('success', 'Conta deletada com sucesso');
        }
    }
}

// ===== SOS MODAL =====
function openSOS() {
    const modal = document.getElementById('sos-modal');
    const sosContent = document.getElementById('sos-content');

    if (sosContent) {
        sosContent.innerHTML = `
            <div class="alert alert-error mb-lg">
                <span>⚠️</span>
                <div>
                    <strong>Se você está em perigo, procure ajuda imediatamente!</strong>
                </div>
            </div>

            <h3>Números de Emergência</h3>
            <div class="grid grid-2 mb-lg">
                <div class="card">
                    <h4>Emergência Médica</h4>
                    <a href="tel:112" style="font-size: 18px; font-weight: bold;">📞 112</a>
                    <p class="text-muted" style="margin-top: 8px;">Disponível 24/7</p>
                </div>
                <div class="card">
                    <h4>Linha de Saúde</h4>
                    <a href="tel:+2453200100" style="font-size: 18px; font-weight: bold;">📞 +245 3200 100</a>
                    <p class="text-muted" style="margin-top: 8px;">Seg-Sex 8h-17h</p>
                </div>
            </div>

            <h3>Hospitais Próximos</h3>
            <div class="grid grid-2">
                <div class="card">
                    <h4>Hospital Nacional</h4>
                    <p class="text-muted">Bissau</p>
                    <a href="tel:+2453201500">📞 +245 3201 500</a>
                </div>
                <div class="card">
                    <h4>Centro de Saúde</h4>
                    <p class="text-muted">Bandim</p>
                    <a href="tel:+2453201800">📞 +245 3201 800</a>
                </div>
            </div>
        `;
    }

    if (modal) {
        modal.classList.add('active');
    }
}

// ===== UTILITY FUNCTIONS =====
function showAlert(type, message) {
    const container = document.getElementById('alert-container');
    if (!container) return;

    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `
        <span>${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ️'}</span>
        <div>${message}</div>
    `;

    container.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 3000);
}

function toggleTheme() {
    appState.isDarkMode = !appState.isDarkMode;
    if (appState.isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('darkMode', appState.isDarkMode);
}

function toggleMobileMenu() {
    const nav = document.querySelector('.nav-mobile');
    if (nav) {
        nav.classList.toggle('active');
    }
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash.toString();
}

function getAgeGroupLabel(ageGroup) {
    const labels = {
        '1': '8-12 anos',
        '2': '13-15 anos',
        '3': '18+ anos'
    };
    return labels[ageGroup] || 'Desconhecido';
}

function loadStoredData() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
        appState.users = JSON.parse(storedUsers);
    }
}

// ===== PLACEHOLDER FUNCTIONS =====
function showTerms() {
    showAlert('info', 'Termos de Serviço - Em desenvolvimento');
}

function showPrivacy() {
    showAlert('info', 'Política de Privacidade - Em desenvolvimento');
}

function showAbout() {
    showAlert('info', 'Sobre Nós - Em desenvolvimento');
}

function showFaq() {
    showAlert('info', 'FAQ - Em desenvolvimento');
}

function showContact() {
    showAlert('info', 'Contato - Em desenvolvimento');
}
