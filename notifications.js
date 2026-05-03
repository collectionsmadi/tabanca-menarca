// ===== NOTIFICATIONS MODULE =====
// Handles period and ovulation reminders with browser notifications

const notificationsModule = {
    // Notification preferences storage
    preferences: {
        // userId: {
        //     periodReminders: true,
        //     ovulationReminders: true,
        //     reminderTime: '09:00', // HH:MM format
        //     timezone: 'UTC',
        //     notificationType: 'browser' // 'browser', 'sms', 'email'
        // }
    },
    
    // Notification history
    history: {
        // userId: [{ type, date, message, read }]
    },
    
    /**
     * Initialize notifications module
     */
    init() {
        const stored = localStorage.getItem('notificationPreferences');
        if (stored) {
            this.preferences = JSON.parse(stored);
        }
        
        const historyStored = localStorage.getItem('notificationHistory');
        if (historyStored) {
            this.history = JSON.parse(historyStored);
        }
        
        // Request browser notification permission
        this.requestBrowserPermission();
        
        // Start checking for reminders
        this.startReminderCheck();
    },
    
    /**
     * Request browser notification permission
     */
    requestBrowserPermission() {
        if ('Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission();
        }
    },
    
    /**
     * Save preferences to localStorage
     */
    savePreferences() {
        localStorage.setItem('notificationPreferences', JSON.stringify(this.preferences));
    },
    
    /**
     * Save history to localStorage
     */
    saveHistory() {
        localStorage.setItem('notificationHistory', JSON.stringify(this.history));
    },
    
    /**
     * Get or create preferences for a user
     */
    getOrCreatePreferences(userId) {
        if (!this.preferences[userId]) {
            this.preferences[userId] = {
                periodReminders: true,
                ovulationReminders: true,
                reminderTime: '09:00',
                timezone: this.getTimezone(),
                notificationType: 'browser'
            };
            this.savePreferences();
        }
        return this.preferences[userId];
    },
    
    /**
     * Get user's timezone
     */
    getTimezone() {
        try {
            return Intl.DateTimeFormat().resolvedOptions().timeZone;
        } catch (e) {
            return 'UTC';
        }
    },
    
    /**
     * Update notification preferences
     */
    updatePreferences(userId, preferences) {
        const current = this.getOrCreatePreferences(userId);
        Object.assign(current, preferences);
        this.savePreferences();
        return { status: 'success', message: 'Preferências atualizadas' };
    },
    
    /**
     * Check if it's time to send reminders
     */
    startReminderCheck() {
        // Check every minute
        setInterval(() => {
            this.checkAndSendReminders();
        }, 60000); // 60 seconds
    },
    
    /**
     * Check and send reminders
     */
    checkAndSendReminders() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        
        if (!currentUser.id) return;
        
        const prefs = this.getOrCreatePreferences(currentUser.id);
        const now = new Date();
        const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        
        // Check if it's time to send reminder
        if (currentTime === prefs.reminderTime) {
            this.checkCycleAndSendReminders(currentUser.id, prefs);
        }
    },
    
    /**
     * Check cycle data and send appropriate reminders
     */
    checkCycleAndSendReminders(userId, prefs) {
        const cycleData = JSON.parse(localStorage.getItem(`cycleData_${userId}`) || '[]');
        
        if (cycleData.length === 0) return;
        
        // Get the most recent period entry
        const lastPeriod = cycleData[cycleData.length - 1];
        const lastPeriodDate = new Date(lastPeriod.date);
        const today = new Date();
        
        // Calculate days since last period
        const daysSincePeriod = Math.floor((today - lastPeriodDate) / (1000 * 60 * 60 * 24));
        
        // Standard 28-day cycle
        const cycleLength = 28;
        const ovulationDay = 14;
        
        // Send period reminder (1 day before expected period)
        if (prefs.periodReminders) {
            const daysUntilPeriod = cycleLength - daysSincePeriod;
            if (daysUntilPeriod === 1) {
                this.sendReminder(userId, 'period', {
                    title: '📅 Seu Período Está Chegando',
                    message: 'Seu período deve começar amanhã. Prepare-se!',
                    icon: '📅'
                });
            }
        }
        
        // Send ovulation reminder (on ovulation day)
        if (prefs.ovulationReminders) {
            const daysUntilOvulation = ovulationDay - daysSincePeriod;
            if (daysUntilOvulation === 0) {
                this.sendReminder(userId, 'ovulation', {
                    title: '🔬 Você Está Ovulando Hoje',
                    message: 'Este é o seu dia mais fértil. Saiba mais sobre ovulação.',
                    icon: '🔬'
                });
            }
        }
    },
    
    /**
     * Send a reminder notification
     */
    sendReminder(userId, type, content) {
        const prefs = this.preferences[userId];
        
        if (!prefs) return;
        
        // Add to history
        if (!this.history[userId]) {
            this.history[userId] = [];
        }
        
        this.history[userId].push({
            type: type,
            date: new Date().toISOString(),
            message: content.message,
            read: false
        });
        
        // Keep only last 50 notifications
        if (this.history[userId].length > 50) {
            this.history[userId].shift();
        }
        
        this.saveHistory();
        
        // Send notification based on type
        if (prefs.notificationType === 'browser') {
            this.sendBrowserNotification(content);
        } else if (prefs.notificationType === 'email') {
            this.sendEmailNotification(userId, content);
        }
    },
    
    /**
     * Send browser notification
     */
    sendBrowserNotification(content) {
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification(content.title, {
                body: content.message,
                icon: '🩸',
                badge: '🩸',
                tag: 'menstrual-reminder',
                requireInteraction: false
            });
        }
    },
    
    /**
     * Send email notification (simulated)
     */
    sendEmailNotification(userId, content) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        
        // In real app, would send via backend
        console.log(`Email sent to ${currentUser.email}: ${content.title}`);
        
        // Show in-app notification
        this.showInAppNotification(content);
    },
    
    /**
     * Show in-app notification
     */
    showInAppNotification(content) {
        const alertContainer = document.getElementById('alert-container');
        if (!alertContainer) return;
        
        const alert = document.createElement('div');
        alert.className = 'alert alert-info';
        alert.innerHTML = `
            <span>${content.icon}</span>
            <div>
                <strong>${content.title}</strong>
                <p>${content.message}</p>
            </div>
        `;
        
        alertContainer.appendChild(alert);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            alert.remove();
        }, 5000);
    },
    
    /**
     * Get notification history for user
     */
    getHistory(userId, limit = 10) {
        const userHistory = this.history[userId] || [];
        return userHistory.slice(-limit).reverse();
    },
    
    /**
     * Mark notification as read
     */
    markAsRead(userId, index) {
        if (this.history[userId] && this.history[userId][index]) {
            this.history[userId][index].read = true;
            this.saveHistory();
        }
    },
    
    /**
     * Clear notification history
     */
    clearHistory(userId) {
        if (this.history[userId]) {
            this.history[userId] = [];
            this.saveHistory();
        }
    },
    
    /**
     * Get unread notification count
     */
    getUnreadCount(userId) {
        const userHistory = this.history[userId] || [];
        return userHistory.filter(n => !n.read).length;
    }
};

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        notificationsModule.init();
    });
} else {
    notificationsModule.init();
}
