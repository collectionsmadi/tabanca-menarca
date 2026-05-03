// ===== PARENTAL CONTROLS UI MODULE =====
// Handles rendering and interaction for parental controls

const parentalControlsUI = {
    /**
     * Show parental controls section in profile
     */
    showParentalControlsSection() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        
        if (currentUser.ageGroup !== '13-15') {
            return `<div class="alert alert-info">
                <span>ℹ️</span>
                <div>Controlo parental está disponível apenas para utilizadores de 13-15 anos.</div>
            </div>`;
        }
        
        const hasParent = parentalControlsModule.hasLinkedParent(currentUser.id);
        const privacyLevel = parentalControlsModule.getPrivacyLevel(currentUser.id);
        
        let html = `<div class="section mb-lg">
            <h2>🔐 Controlo Parental e Privacidade</h2>
            
            <div class="alert alert-info">
                <span>ℹ️</span>
                <div>Podes controlar o que os teus pais veem sobre a tua atividade no Tabanca Menarca.</div>
            </div>`;
        
        if (!hasParent) {
            html += `<div class="card">
                <h3>Adicionar Pai/Mãe</h3>
                <p>Convida um dos teus pais para monitorizar a tua atividade de forma segura.</p>
                <button class="btn-primary" onclick="showParentalLinkingForm()">
                    Adicionar Pai/Mãe
                </button>
            </div>`;
        } else {
            const parentEmail = parentalControlsModule.getParentEmail(currentUser.id);
            html += `<div class="card">
                <h3>✅ Pai/Mãe Vinculado</h3>
                <p><strong>Email:</strong> ${parentEmail}</p>
                <p><strong>Nível de Privacidade:</strong> ${this.getPrivacyLevelLabel(privacyLevel)}</p>
                <div class="module-actions">
                    <button class="btn-small" onclick="showPrivacySettings()">
                        ⚙️ Configurar Privacidade
                    </button>
                    <button class="btn-small" onclick="revokeParentAccess()" style="background: #EF4444;">
                        🚫 Remover Acesso
                    </button>
                </div>
            </div>`;
        }
        
        html += `</div>`;
        return html;
    },
    
    /**
     * Get label for privacy level
     */
    getPrivacyLevelLabel(level) {
        const labels = {
            'full': '🔓 Sem Restrições (Vê Tudo)',
            'content_only': '🔒 Apenas Conteúdo (Vê o que acedei)',
            'none': '🔐 Completa (Não Vê Nada)'
        };
        return labels[level] || 'Desconhecido';
    },
    
    /**
     * Show form to link parent account
     */
    showParentalLinkingForm() {
        const html = `
            <div class="form">
                <h3>Adicionar Pai/Mãe</h3>
                <p class="text-muted">Insere o email do teu pai/mãe. Eles receberão um email de verificação.</p>
                
                <div class="form-group">
                    <label>Email do Pai/Mãe</label>
                    <input type="email" id="parent-email" placeholder="pai@exemplo.com" required>
                </div>
                
                <div class="form-group">
                    <label>Palavra-passe do Pai/Mãe (para criar conta)</label>
                    <input type="password" id="parent-password" placeholder="Mínimo 8 caracteres" required>
                </div>
                
                <div class="form-group">
                    <label>Confirmar Palavra-passe</label>
                    <input type="password" id="parent-password-confirm" placeholder="Confirmar palavra-passe" required>
                </div>
                
                <div class="alert alert-warning">
                    <span>⚠️</span>
                    <div>O teu pai/mãe terá acesso ao conteúdo que acedes, mas NÃO verá informações privadas como datas de período ou ovulação.</div>
                </div>
                
                <div class="module-actions-full">
                    <button class="btn-primary" onclick="linkParentAccount()">
                        Enviar Convite
                    </button>
                    <button class="btn-secondary" onclick="showParentalControlsSection()">
                        Cancelar
                    </button>
                </div>
            </div>
        `;
        
        document.getElementById('parental-content').innerHTML = html;
        document.getElementById('parental-modal').classList.add('active');
    },
    
    /**
     * Show privacy settings
     */
    showPrivacySettings() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        const privacyLevel = parentalControlsModule.getPrivacyLevel(currentUser.id);
        
        const html = `
            <div class="form">
                <p class="text-muted">Escolhe o que o teu pai/mãe pode ver:</p>
                
                <div class="form-group">
                    <label class="checkbox">
                        <input type="radio" name="privacy" value="content_only" 
                               ${privacyLevel === 'content_only' ? 'checked' : ''}>
                        <div>
                            <strong>🔒 Apenas Conteúdo (Recomendado)</strong>
                            <small>Vê o conteúdo que acedo, mas não dados privados</small>
                        </div>
                    </label>
                </div>
                
                <div class="form-group">
                    <label class="checkbox">
                        <input type="radio" name="privacy" value="full" 
                               ${privacyLevel === 'full' ? 'checked' : ''}>
                        <div>
                            <strong>🔓 Sem Restrições</strong>
                            <small>Vê tudo, incluindo datas de período e sintomas</small>
                        </div>
                    </label>
                </div>
                
                <div class="form-group">
                    <label class="checkbox">
                        <input type="radio" name="privacy" value="none" 
                               ${privacyLevel === 'none' ? 'checked' : ''}>
                        <div>
                            <strong>🔐 Completa</strong>
                            <small>Não vê nada da minha atividade</small>
                        </div>
                    </label>
                </div>
                
                <div class="module-actions-full">
                    <button class="btn-primary" onclick="savePrivacySettings()">
                        Guardar Configurações
                    </button>
                    <button class="btn-secondary" onclick="document.getElementById('privacy-modal').classList.remove('active')">
                        Cancelar
                    </button>
                </div>
            </div>
        `;
        
        document.getElementById('privacy-content').innerHTML = html;
        document.getElementById('privacy-modal').classList.add('active');
    },
    
    /**
     * Show parent dashboard
     */
    showParentDashboard(parentEmail, childUserId) {
        const summary = parentalControlsModule.getContentAccessSummary(childUserId);
        const activities = parentalControlsModule.getActivityHistory(childUserId);
        
        let topModulesHtml = '';
        if (summary.topModules.length > 0) {
            topModulesHtml = summary.topModules.map(m => 
                `<li>${m.module} (${m.count} vezes)</li>`
            ).join('');
        } else {
            topModulesHtml = '<li class="text-muted">Sem atividade ainda</li>';
        }
        
        const html = `
            <div class="section mb-lg">
                <h3>📊 Resumo de Atividade</h3>
                <div class="grid grid-2">
                    <div class="card">
                        <div class="card-icon">📚</div>
                        <h4>Módulos Acedidos</h4>
                        <p style="font-size: 24px; font-weight: bold; color: var(--primary);">
                            ${summary.totalModulesAccessed}
                        </p>
                    </div>
                    <div class="card">
                        <div class="card-icon">⏱️</div>
                        <h4>Tempo Total</h4>
                        <p style="font-size: 24px; font-weight: bold; color: var(--primary);">
                            ${Math.round(summary.totalTimeSpent / 60)} min
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="section mb-lg">
                <h3>🏆 Módulos Mais Acedidos</h3>
                <ul style="list-style: none; padding: 0;">
                    ${topModulesHtml}
                </ul>
            </div>
            
            <div class="section mb-lg">
                <h3>⏰ Última Atividade</h3>
                <p>${summary.lastAccessed ? new Date(summary.lastAccessed).toLocaleDateString('pt-PT') : 'Sem atividade'}</p>
            </div>
            
            <div class="alert alert-info">
                <span>ℹ️</span>
                <div><strong>Privacidade:</strong> Não vês dados privados como datas de período ou sintomas. Apenas conteúdo acedido.</div>
            </div>
        `;
        
        document.getElementById('parent-dashboard-content').innerHTML = html;
        document.getElementById('parent-dashboard-modal').classList.add('active');
    }
};

// Functions called from UI

function showParentalControlsSection() {
    const section = parentalControlsUI.showParentalControlsSection();
    // This would be called from profile page
}

function showParentalLinkingForm() {
    parentalControlsUI.showParentalLinkingForm();
}

function linkParentAccount() {
    const email = document.getElementById('parent-email').value;
    const password = document.getElementById('parent-password').value;
    const passwordConfirm = document.getElementById('parent-password-confirm').value;
    
    if (!email || !password || !passwordConfirm) {
        alert('Por favor, preenche todos os campos');
        return;
    }
    
    if (password !== passwordConfirm) {
        alert('As palavras-passe não correspondem');
        return;
    }
    
    if (password.length < 8) {
        alert('A palavra-passe deve ter pelo menos 8 caracteres');
        return;
    }
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const result = parentalControlsModule.linkParentAccount(currentUser.id, email, password);
    
    if (result.status === 'success') {
        alert(`✅ Convite enviado para ${email}!\n\nO teu pai/mãe receberá um email com instruções de verificação.`);
        document.getElementById('parental-modal').classList.remove('active');
    } else {
        alert('❌ Erro ao enviar convite: ' + result.message);
    }
}

function showPrivacySettings() {
    parentalControlsUI.showPrivacySettings();
}

function savePrivacySettings() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const privacyLevel = document.querySelector('input[name="privacy"]:checked').value;
    
    const result = parentalControlsModule.setPrivacyLevel(currentUser.id, privacyLevel);
    
    if (result.status === 'success') {
        alert('✅ Configurações de privacidade guardadas!');
        document.getElementById('privacy-modal').classList.remove('active');
    } else {
        alert('❌ Erro: ' + result.message);
    }
}

function revokeParentAccess() {
    if (!confirm('Tem a certeza? O teu pai/mãe deixará de ter acesso à tua atividade.')) {
        return;
    }
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const result = parentalControlsModule.revokeParentAccess(currentUser.id);
    
    if (result.status === 'success') {
        alert('✅ Acesso de pai/mãe removido');
        location.reload();
    } else {
        alert('❌ Erro: ' + result.message);
    }
}

function showParentDashboard() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const parentEmail = parentalControlsModule.getParentEmail(currentUser.id);
    
    if (!parentEmail) {
        alert('Nenhum pai/mãe vinculado');
        return;
    }
    
    parentalControlsUI.showParentDashboard(parentEmail, currentUser.id);
}
