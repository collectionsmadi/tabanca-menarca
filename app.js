// CRITICAL: Load content modules FIRST before anything else

// ===== CONTENT DATABASE - LOAD IMMEDIATELY =====
let contentDatabase = {
    modules_8_12: [],
    modules_13_15: [],
    modules_18_plus: []
};

// ===== ENHANCED STATE MANAGEMENT =====
const appState = {
    currentPage: 'home',
    currentUser: null,
    users: [],
    isLoggedIn: false,
    isDarkMode: false,
    savedArticles: [],
    contentRatings: {},
    searchQuery: '',
    recommendedContent: []
};

// ===== BOOK ILLUSTRATIONS DATABASE =====
const bookIllustrations = {
    'menstruation': {
        title: 'O que é Menstruação?',
        images: [
            { src: '/home/ubuntu/tabanca-website/assets/images/book-page-25.png', caption: 'Símbolo da gota de sangue' },
            { src: '/home/ubuntu/tabanca-website/assets/images/book-page-26.png', caption: 'Mãe ensinando Leonor' }
        ]
    },
    'body': {
        title: 'Meu Corpo',
        images: [
            { src: '/home/ubuntu/tabanca-website/assets/images/leonor-07.png', caption: 'Leonor - Personagem Guia' }
        ]
    },
    'products': {
        title: 'Produtos Menstruais',
        images: [
            { src: '/home/ubuntu/tabanca-website/assets/images/book-page-29.png', caption: 'Instruções de Higiene' },
            { src: '/home/ubuntu/tabanca-website/assets/images/book-page-30.png', caption: 'Orientações Práticas' }
        ]
    }
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // CRITICAL: Load content modules immediately
    if (typeof contentModules !== 'undefined') {
        contentDatabase = contentModules;
        console.log('✓ Content modules loaded successfully');
    } else {
        console.warn('⚠ Content modules NOT found - check if content-modules.js is loaded');
    }
    
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
    
    // Load saved articles and ratings
    const savedArticles = localStorage.getItem('savedArticles');
    if (savedArticles) {
        appState.savedArticles = JSON.parse(savedArticles);
    }
    
    const contentRatings = localStorage.getItem('contentRatings');
    if (contentRatings) {
        appState.contentRatings = JSON.parse(contentRatings);
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

    // NEW: Search functionality
    const searchInput = document.getElementById('content-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            handleContentSearch(e.target.value);
        });
    }
}

// ===== ENHANCED LEARN PAGE WITH SEARCH & RECOMMENDATIONS =====
function renderLearnPage() {
    if (!appState.isLoggedIn) {
        showPage('login');
        return;
    }

    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    const userAgeGroup = appState.currentUser.ageGroup;
    let availableModules = [];

    if (userAgeGroup === '8-12') {
        availableModules = contentDatabase.modules_8_12 || [];
    } else if (userAgeGroup === '13-15') {
        availableModules = [...(contentDatabase.modules_8_12 || []), ...(contentDatabase.modules_13_15 || [])];
    } else if (userAgeGroup === '18+') {
        availableModules = [
            ...(contentDatabase.modules_8_12 || []),
            ...(contentDatabase.modules_13_15 || []),
            ...(contentDatabase.modules_18_plus || [])
        ];
    }

    let html = `
        <div class="learn-container">
            <div class="learn-header">
                <h1>Aprenda sobre Saúde Menstrual</h1>
                <p>Escolha um tópico para começar</p>
            </div>

            <!-- SEARCH BAR -->
            <div class="search-section">
                <input 
                    type="text" 
                    id="content-search" 
                    class="search-input" 
                    placeholder="Procurar módulos... (ex: ciclo, ovulação, produtos)"
                    autocomplete="off"
                >
                <button class="search-btn">🔍 Procurar</button>
            </div>

            <!-- RECOMMENDED CONTENT -->
            <div class="recommendations-section">
                <h2>📌 Recomendado Para Ti</h2>
                <div class="recommendations-grid">
    `;

    const recommended = getRecommendedContent(userAgeGroup, availableModules);
    recommended.forEach(module => {
        html += `
            <div class="module-card recommended" onclick="viewModule('${module.id}')">
                <div class="module-emoji">${module.emoji || '📚'}</div>
                <h3>${module.title}</h3>
                <p>${module.description}</p>
                <div class="module-meta">
                    <span class="read-time">⏱️ ${module.readTime || '5'} min</span>
                    <span class="difficulty">${module.difficulty || 'Iniciante'}</span>
                </div>
                <div class="module-actions">
                    <button class="btn-small" onclick="saveArticle('${module.id}', event)">💾 Guardar</button>
                </div>
            </div>
        `;
    });

    html += `
                </div>
            </div>

            <!-- ALL MODULES -->
            <div class="modules-section">
                <h2>📚 Todos os Módulos</h2>
                <div class="modules-grid" id="modules-grid">
    `;

    availableModules.forEach(module => {
        const isSaved = appState.savedArticles.includes(module.id);
        const rating = appState.contentRatings[module.id] || 0;
        
        html += `
            <div class="module-card" onclick="viewModule('${module.id}')">
                <div class="module-emoji">${module.emoji || '📚'}</div>
                <h3>${module.title}</h3>
                <p>${module.description}</p>
                <div class="module-meta">
                    <span class="read-time">⏱️ ${module.readTime || '5'} min</span>
                    <span class="difficulty">${module.difficulty || 'Iniciante'}</span>
                </div>
                <div class="module-rating">
                    <span class="stars">${renderStars(rating)}</span>
                    <span class="rating-count">${rating > 0 ? `(${rating}/5)` : 'Sem avaliações'}</span>
                </div>
                <div class="module-actions">
                    <button class="btn-small ${isSaved ? 'saved' : ''}" onclick="saveArticle('${module.id}', event)">
                        ${isSaved ? '✓ Guardado' : '💾 Guardar'}
                    </button>
                </div>
            </div>
        `;
    });

    html += `
                </div>
            </div>

            <!-- SAVED ARTICLES -->
            <div class="saved-section">
                <h2>📖 Guardado Para Depois</h2>
                <div class="saved-grid" id="saved-grid">
    `;

    if (appState.savedArticles.length > 0) {
        appState.savedArticles.forEach(articleId => {
            const module = availableModules.find(m => m.id === articleId);
            if (module) {
                html += `
                    <div class="saved-card" onclick="viewModule('${module.id}')">
                        <div class="saved-emoji">${module.emoji || '📚'}</div>
                        <h4>${module.title}</h4>
                        <button class="btn-remove" onclick="removeSavedArticle('${module.id}', event)">✕</button>
                    </div>
                `;
            }
        });
    } else {
        html += '<p class="no-saved">Nenhum artigo guardado ainda</p>';
    }

    html += `
                </div>
            </div>
        </div>
    `;

    mainContent.innerHTML = html;
}

// ===== SEARCH FUNCTIONALITY =====
function handleContentSearch(query) {
    appState.searchQuery = query.toLowerCase();
    
    if (!appState.isLoggedIn) return;

    const userAgeGroup = appState.currentUser.ageGroup;
    let availableModules = [];

    if (userAgeGroup === '8-12') {
        availableModules = contentDatabase.modules_8_12 || [];
    } else if (userAgeGroup === '13-15') {
        availableModules = [...(contentDatabase.modules_8_12 || []), ...(contentDatabase.modules_13_15 || [])];
    } else if (userAgeGroup === '18+') {
        availableModules = [
            ...(contentDatabase.modules_8_12 || []),
            ...(contentDatabase.modules_13_15 || []),
            ...(contentDatabase.modules_18_plus || [])
        ];
    }

    const filteredModules = availableModules.filter(module => {
        const searchText = `${module.title} ${module.description}`.toLowerCase();
        return searchText.includes(appState.searchQuery);
    });

    const modulesGrid = document.getElementById('modules-grid');
    if (modulesGrid) {
        if (filteredModules.length === 0) {
            modulesGrid.innerHTML = '<p class="no-results">Nenhum módulo encontrado. Tenta outra pesquisa.</p>';
        } else {
            let html = '';
            filteredModules.forEach(module => {
                const isSaved = appState.savedArticles.includes(module.id);
                const rating = appState.contentRatings[module.id] || 0;
                
                html += `
                    <div class="module-card" onclick="viewModule('${module.id}')">
                        <div class="module-emoji">${module.emoji || '📚'}</div>
                        <h3>${module.title}</h3>
                        <p>${module.description}</p>
                        <div class="module-meta">
                            <span class="read-time">⏱️ ${module.readTime || '5'} min</span>
                            <span class="difficulty">${module.difficulty || 'Iniciante'}</span>
                        </div>
                        <div class="module-rating">
                            <span class="stars">${renderStars(rating)}</span>
                            <span class="rating-count">${rating > 0 ? `(${rating}/5)` : 'Sem avaliações'}</span>
                        </div>
                        <div class="module-actions">
                            <button class="btn-small ${isSaved ? 'saved' : ''}" onclick="saveArticle('${module.id}', event)">
                                ${isSaved ? '✓ Guardado' : '💾 Guardar'}
                            </button>
                        </div>
                    </div>
                `;
            });
            modulesGrid.innerHTML = html;
        }
    }
}

// ===== RECOMMENDATIONS ENGINE =====
function getRecommendedContent(userAgeGroup, availableModules) {
    // Get top 3 most recent or highest-rated modules
    const recommended = availableModules
        .sort((a, b) => {
            const ratingA = appState.contentRatings[a.id] || 0;
            const ratingB = appState.contentRatings[b.id] || 0;
            return ratingB - ratingA;
        })
        .slice(0, 3);
    
    return recommended.length > 0 ? recommended : availableModules.slice(0, 3);
}

// ===== SAVE ARTICLE FUNCTIONALITY =====
function saveArticle(moduleId, event) {
    event.stopPropagation();
    
    if (appState.savedArticles.includes(moduleId)) {
        appState.savedArticles = appState.savedArticles.filter(id => id !== moduleId);
    } else {
        appState.savedArticles.push(moduleId);
    }
    
    localStorage.setItem('savedArticles', JSON.stringify(appState.savedArticles));
    renderLearnPage();
}

function removeSavedArticle(moduleId, event) {
    event.stopPropagation();
    appState.savedArticles = appState.savedArticles.filter(id => id !== moduleId);
    localStorage.setItem('savedArticles', JSON.stringify(appState.savedArticles));
    renderLearnPage();
}

// ===== CONTENT RATING SYSTEM =====
function rateContent(moduleId, rating) {
    appState.contentRatings[moduleId] = rating;
    localStorage.setItem('contentRatings', JSON.stringify(appState.contentRatings));
    
    // Show confirmation
    alert(`Obrigado! Avaliaste este módulo com ${rating} estrelas.`);
    closeModal('content-modal');
    renderLearnPage();
}

function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? '⭐' : '☆';
    }
    return stars;
}

// ===== ENHANCED VIEW MODULE WITH BOOK ILLUSTRATIONS =====
function viewModule(moduleId) {
    if (!appState.isLoggedIn) {
        showPage('login');
        return;
    }

    const userAgeGroup = appState.currentUser.ageGroup;
    let availableModules = [];

    if (userAgeGroup === '8-12') {
        availableModules = contentDatabase.modules_8_12 || [];
    } else if (userAgeGroup === '13-15') {
        availableModules = [...(contentDatabase.modules_8_12 || []), ...(contentDatabase.modules_13_15 || [])];
    } else if (userAgeGroup === '18+') {
        availableModules = [
            ...(contentDatabase.modules_8_12 || []),
            ...(contentDatabase.modules_13_15 || []),
            ...(contentDatabase.modules_18_plus || [])
        ];
    }

    const module = availableModules.find(m => m.id === moduleId);
    if (!module) {
        alert('Módulo não encontrado');
        return;
    }

    const contentModal = document.getElementById('content-modal');
    if (!contentModal) return;

    const isSaved = appState.savedArticles.includes(moduleId);
    const currentRating = appState.contentRatings[moduleId] || 0;

    let html = `
        <div class="modal-header">
            <h2>${module.title}</h2>
            <button class="modal-close">✕</button>
        </div>
        
        <div class="modal-content">
            <div class="module-info">
                <span class="badge">${module.difficulty || 'Iniciante'}</span>
                <span class="badge">⏱️ ${module.readTime || '5'} min</span>
            </div>

            <!-- BOOK ILLUSTRATIONS -->
            <div class="book-illustrations">
    `;

    // Add relevant book illustrations if available
    const illustrationKey = moduleId.replace('what-is-', '').replace('-', '_');
    if (bookIllustrations[illustrationKey]) {
        bookIllustrations[illustrationKey].images.forEach(img => {
            html += `
                <figure class="illustration">
                    <img src="${img.src}" alt="${img.caption}" onerror="this.style.display='none'">
                    <figcaption>${img.caption}</figcaption>
                </figure>
            `;
        });
    }

    html += `
            </div>

            <div class="module-body">
                ${module.content || '<p>Conteúdo em desenvolvimento</p>'}
            </div>

            <!-- RATING SECTION -->
            <div class="rating-section">
                <h3>Avalia este Módulo:</h3>
                <div class="star-rating">
                    <button class="star" onclick="rateContent('${moduleId}', 1)">⭐</button>
                    <button class="star" onclick="rateContent('${moduleId}', 2)">⭐</button>
                    <button class="star" onclick="rateContent('${moduleId}', 3)">⭐</button>
                    <button class="star" onclick="rateContent('${moduleId}', 4)">⭐</button>
                    <button class="star" onclick="rateContent('${moduleId}', 5)">⭐</button>
                </div>
                <p class="rating-display">Tua Avaliação: ${renderStars(currentRating)}</p>
            </div>

            <!-- ACTION BUTTONS -->
            <div class="module-actions-full">
                <button class="btn-primary" onclick="saveArticle('${moduleId}', event)">
                    ${isSaved ? '✓ Guardado' : '💾 Guardar Para Depois'}
                </button>
                <button class="btn-secondary" onclick="shareContent('${moduleId}')">
                    📤 Partilhar
                </button>
            </div>
        </div>
    `;

    contentModal.innerHTML = html;
    contentModal.classList.add('active');

    // Re-attach close button listener
    contentModal.querySelector('.modal-close').addEventListener('click', () => {
        contentModal.classList.remove('active');
    });
}

// ===== SHARE FUNCTIONALITY =====
function shareContent(moduleId) {
    const userAgeGroup = appState.currentUser.ageGroup;
    let availableModules = [];

    if (userAgeGroup === '8-12') {
        availableModules = contentDatabase.modules_8_12 || [];
    } else if (userAgeGroup === '13-15') {
        availableModules = [...(contentDatabase.modules_8_12 || []), ...(contentDatabase.modules_13_15 || [])];
    } else if (userAgeGroup === '18+') {
        availableModules = [
            ...(contentDatabase.modules_8_12 || []),
            ...(contentDatabase.modules_13_15 || []),
            ...(contentDatabase.modules_18_plus || [])
        ];
    }

    const module = availableModules.find(m => m.id === moduleId);
    if (!module) return;

    const shareText = `Aprendi sobre "${module.title}" na Tabanca Menarca! 📚 Vem aprender também!`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Tabanca Menarca',
            text: shareText,
            url: window.location.href
        }).catch(err => console.log('Erro ao partilhar:', err));
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Texto copiado para a área de transferência!');
        });
    }
}

// ===== LOAD STORED DATA =====
function loadStoredData() {
    const users = localStorage.getItem('users');
    if (users) {
        appState.users = JSON.parse(users);
    }
}

// ===== PAGE NAVIGATION =====
function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    const targetPage = document.getElementById(`${page}-page`);
    if (targetPage) {
        targetPage.style.display = 'block';
    }

    if (page === 'learn') {
        renderLearnPage();
    } else if (page === 'tracker') {
        renderTrackerPage();
    } else if (page === 'home') {
        renderHomePage();
    } else if (page === 'profile') {
        renderProfilePage();
    }
}

// ===== THEME TOGGLE =====
function toggleTheme() {
    appState.isDarkMode = !appState.isDarkMode;
    if (appState.isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('darkMode', appState.isDarkMode);
}

// ===== PLACEHOLDER FUNCTIONS (from original app.js) =====
function renderHomePage() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;
    mainContent.innerHTML = '<h1>Bem-vinda à Tabanca Menarca!</h1><p>Faz login para começar.</p>';
}

function renderTrackerPage() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;
    mainContent.innerHTML = '<h1>Rastreador de Ciclo</h1><p>Funcionalidade em desenvolvimento</p>';
}

function renderProfilePage() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;
    mainContent.innerHTML = '<h1>Meu Perfil</h1><p>Funcionalidade em desenvolvimento</p>';
}

function handleRegistration(e) {
    e.preventDefault();
    alert('Registo em desenvolvimento');
}

function handleLogin(e) {
    e.preventDefault();
    alert('Login em desenvolvimento');
}

function handleAgeGroupChange(ageGroup) {
    console.log('Idade selecionada:', ageGroup);
}

function updateUIForLoggedInUser() {
    console.log('UI atualizada para utilizador autenticado');
}

function updateActiveNav(page) {
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });
}

function toggleMobileMenu() {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.classList.toggle('mobile-open');
    }
}

function openSOS() {
    const sosModal = document.getElementById('sos-modal');
    if (sosModal) {
        sosModal.classList.add('active');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}
