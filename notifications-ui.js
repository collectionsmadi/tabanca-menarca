// ===== NOTIFICATIONS UI MODULE =====
// Handles rendering notification preferences and history

const notificationsUI = {
    /**
     * Show notification preferences section in profile
     */
    showNotificationPreferencesSection() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        const prefs = notificationsModule.getOrCreatePreferences(currentUser.id);
        
        const html = `<div class="section mb-lg">
            <h2>🔔 Notificações e Lembretes</h2>
            
            <div class="card">
                <h3>Configurações de Lembretes</h3>
                <p class="text-muted">Recebe lembretes sobre o teu período e ovulação.</p>
                
                <div class="form">
                    <div class="form-group">
                        <label class="checkbox">
                            <input type="checkbox" id="period-reminders" 
                                   ${prefs.periodReminders ? 'checked' : ''}>
                            <div>
                                <strong>📅 Lembretes de Período</strong>
                                <small>Recebe uma notificação 1 dia antes do teu período</small>
                            </div>
                        </label>
                    </div>
                    
                    <div class="form-group">
                        <label class="checkbox">
                            <input type="checkbox" id="ovulation-reminders" 
                                   ${prefs.ovulationReminders ? 'checked' : ''}>
                            <div>
                                <strong>🔬 Lembretes de Ovulação</strong>
                                <small>Recebe uma notificação no dia da ovulação</small>
                            </div>
                        </label>
                    </div>
                    
                    <div class="form-group">
                        <label>🕐 Hora do Lembrete</label>
                        <input type="time" id="reminder-time" value="${prefs.reminderTime}">
                        <small>Que horas gostarias de receber os lembretes?</small>
                    </div>
                    
                    <div class="form-group">
                        <label>📱 Tipo de Notificação</label>
                        <select id="notification-type">
                            <option value="browser" ${prefs.notificationType === 'browser' ? 'selected' : ''}>
                                🌐 Notificação do Navegador
                            </option>
                            <option value="email" ${prefs.notificationType === 'email' ? 'selected' : ''}>
                                📧 Email
                            </option>
                        </select>
                        <small>Como preferes receber notificações?</small>
                    </div>
                    
                    <button class="btn-primary" onclick="saveNotificationPreferences()">
                        ✅ Guardar Preferências
                    </button>
                </div>
            </div>
            
            <div class="card mt-md">
                <h3>📜 Histórico de Notificações</h3>
                <button class="btn-secondary" onclick="showNotificationHistory()">
                    Ver Histórico
                </button>
            </div>
        </div>`;
        
        return html;
    },
    
    /**
     * Show notification history modal
     */
    showNotificationHistory() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        const history = notificationsModule.getHistory(currentUser.id, 20);
        
        let historyHtml = '';
        
        if (history.length === 0) {
            historyHtml = '<p class="text-muted text-center">Sem notificações ainda</p>';
        } else {
            historyHtml = history.map((notif, idx) => `
                <div class="card" style="margin-bottom: 12px;">
                    <div style="display: flex; justify-content: space-between; align-items: start;">
                        <div>
                            <h4>${notif.type === 'period' ? '📅' : '🔬'} ${notif.message}</h4>
                            <small class="text-muted">${new Date(notif.date).toLocaleString('pt-PT')}</small>
                        </div>
                        <span style="font-size: 12px; color: var(--muted);">
                            ${notif.read ? '✓ Lida' : '🆕 Nova'}
                        </span>
                    </div>
                </div>
            `).join('');
        }
        
        const html = `
            <div style="max-height: 400px; overflow-y: auto;">
                ${historyHtml}
            </div>
            
            <div class="module-actions-full" style="margin-top: 16px;">
                <button class="btn-secondary" onclick="clearNotificationHistory()">
                    🗑️ Limpar Histórico
                </button>
                <button class="btn-secondary" onclick="document.getElementById('notification-history-modal').classList.remove('active')">
                    Fechar
                </button>
            </div>
        `;
        
        // Create modal if doesn't exist
        let modal = document.getElementById('notification-history-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'notification-history-modal';
            modal.className = 'modal';
            modal.innerHTML = `
                <div class="modal-content modal-lg">
                    <button class="modal-close" onclick="document.getElementById('notification-history-modal').classList.remove('active')">✕</button>
                    <h2>📜 Histórico de Notificações</h2>
                    <div id="notification-history-content"></div>
                </div>
            `;
            document.body.appendChild(modal);
        }
        
        document.getElementById('notification-history-content').innerHTML = html;
        modal.classList.add('active');
    },
    
    /**
     * Show notification badge with unread count
     */
    showNotificationBadge() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        const unreadCount = notificationsModule.getUnreadCount(currentUser.id);
        
        if (unreadCount === 0) return '';
        
        return `<span style="
            position: absolute;
            top: -8px;
            right: -8px;
            background: #EF4444;
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: bold;
        ">${unreadCount}</span>`;
    }
};

// UI Functions

function saveNotificationPreferences() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    
    const preferences = {
        periodReminders: document.getElementById('period-reminders').checked,
        ovulationReminders: document.getElementById('ovulation-reminders').checked,
        reminderTime: document.getElementById('reminder-time').value,
        notificationType: document.getElementById('notification-type').value
    };
    
    const result = notificationsModule.updatePreferences(currentUser.id, preferences);
    
    if (result.status === 'success') {
        alert('✅ ' + result.message);
    } else {
        alert('❌ Erro: ' + result.message);
    }
}

function showNotificationHistory() {
    notificationsUI.showNotificationHistory();
}

function clearNotificationHistory() {
    if (!confirm('Tem a certeza que quer limpar o histórico de notificações?')) {
        return;
    }
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    notificationsModule.clearHistory(currentUser.id);
    alert('✅ Histórico limpo');
    notificationsUI.showNotificationHistory();
}

function testNotification() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    
    notificationsModule.sendReminder(currentUser.id, 'period', {
        title: '🧪 Teste de Notificação',
        message: 'Esta é uma notificação de teste. Se consegues ver isto, as notificações estão a funcionar!',
        icon: '🧪'
    });
    
    alert('✅ Notificação de teste enviada!');
}
