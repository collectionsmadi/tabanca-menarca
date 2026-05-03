// ===== PARENTAL CONTROLS & PRIVACY MODULE =====
// Handles parent-child account linking, privacy settings, and data visibility

const parentalControlsModule = {
    // Parent-child relationships storage
    parentalLinks: {},
    
    // Privacy settings per user
    privacySettings: {
        // userId: { level: 'full', 'content_only', 'none', parentEmail: '' }
    },
    
    // Sensitive data that should be hidden from parents
    sensitiveDataFields: ['periodDates', 'ovulationDates', 'symptoms', 'flowIntensity', 'notes'],
    
    /**
     * Initialize parental controls from localStorage
     */
    init() {
        const stored = localStorage.getItem('parentalLinks');
        if (stored) {
            this.parentalLinks = JSON.parse(stored);
        }
        
        const privacyStored = localStorage.getItem('privacySettings');
        if (privacyStored) {
            this.privacySettings = JSON.parse(privacyStored);
        }
    },
    
    /**
     * Save parental links to localStorage
     */
    save() {
        localStorage.setItem('parentalLinks', JSON.stringify(this.parentalLinks));
        localStorage.setItem('privacySettings', JSON.stringify(this.privacySettings));
    },
    
    /**
     * Link a parent account to a child account
     * @param {string} childUserId - The child's user ID
     * @param {string} parentEmail - Parent's email address
     * @param {string} parentPassword - Parent's password (will be hashed)
     * @returns {object} Result with status and verification token
     */
    linkParentAccount(childUserId, parentEmail, parentPassword) {
        // Generate verification token
        const verificationToken = this.generateToken();
        const tokenExpiry = Date.now() + (24 * 60 * 60 * 1000); // 24 hours
        
        // Create parent account if doesn't exist
        if (!this.parentalLinks[childUserId]) {
            this.parentalLinks[childUserId] = {
                parentEmail: parentEmail,
                parentPassword: this.hashPassword(parentPassword),
                verificationToken: verificationToken,
                tokenExpiry: tokenExpiry,
                isVerified: false,
                linkedAt: null,
                privacyLevel: 'content_only' // Default: see content only, not health data
            };
        }
        
        this.save();
        
        return {
            status: 'success',
            message: 'Verificação enviada para o email do pai/mãe',
            verificationToken: verificationToken,
            // In real app, would send email here
            emailSent: true
        };
    },
    
    /**
     * Verify parent email with token
     * @param {string} childUserId - Child's user ID
     * @param {string} verificationToken - Token from email
     * @returns {object} Result with status
     */
    verifyParentEmail(childUserId, verificationToken) {
        const link = this.parentalLinks[childUserId];
        
        if (!link) {
            return { status: 'error', message: 'Conta de criança não encontrada' };
        }
        
        if (link.verificationToken !== verificationToken) {
            return { status: 'error', message: 'Token de verificação inválido' };
        }
        
        if (Date.now() > link.tokenExpiry) {
            return { status: 'error', message: 'Token expirou. Tenta novamente.' };
        }
        
        // Mark as verified
        link.isVerified = true;
        link.linkedAt = new Date().toISOString();
        
        this.save();
        
        return {
            status: 'success',
            message: 'Conta de pai/mãe verificada com sucesso!',
            privacyLevel: link.privacyLevel
        };
    },
    
    /**
     * Check if a user has a linked parent
     * @param {string} userId - User ID to check
     * @returns {boolean} True if parent is linked and verified
     */
    hasLinkedParent(userId) {
        const link = this.parentalLinks[userId];
        return link && link.isVerified === true;
    },
    
    /**
     * Get parent's email for a child
     * @param {string} childUserId - Child's user ID
     * @returns {string|null} Parent's email or null
     */
    getParentEmail(childUserId) {
        const link = this.parentalLinks[childUserId];
        return (link && link.isVerified) ? link.parentEmail : null;
    },
    
    /**
     * Get privacy level for a user
     * @param {string} userId - User ID
     * @returns {string} Privacy level: 'full', 'content_only', 'none'
     */
    getPrivacyLevel(userId) {
        if (this.parentalLinks[userId]) {
            return this.parentalLinks[userId].privacyLevel;
        }
        return 'full'; // No parent linked = full privacy
    },
    
    /**
     * Set privacy level for a user
     * @param {string} userId - User ID
     * @param {string} level - 'full', 'content_only', 'none'
     */
    setPrivacyLevel(userId, level) {
        if (!this.parentalLinks[userId]) {
            this.parentalLinks[userId] = {};
        }
        
        if (['full', 'content_only', 'none'].includes(level)) {
            this.parentalLinks[userId].privacyLevel = level;
            this.save();
            return { status: 'success', message: 'Nível de privacidade atualizado' };
        }
        
        return { status: 'error', message: 'Nível de privacidade inválido' };
    },
    
    /**
     * Filter user data based on privacy settings
     * @param {string} userId - User ID
     * @param {object} userData - User's full data
     * @param {string} viewerType - 'child' or 'parent'
     * @returns {object} Filtered data
     */
    filterDataByPrivacy(userId, userData, viewerType = 'child') {
        if (viewerType === 'child') {
            // Child always sees their own data
            return userData;
        }
        
        // Parent viewing child's data
        const privacyLevel = this.getPrivacyLevel(userId);
        
        if (privacyLevel === 'none') {
            // Parent sees nothing
            return {};
        }
        
        if (privacyLevel === 'content_only') {
            // Parent sees content access history but not health data
            const filtered = { ...userData };
            this.sensitiveDataFields.forEach(field => {
                delete filtered[field];
            });
            return filtered;
        }
        
        // 'full' - parent sees everything (shouldn't happen if parent is linked)
        return userData;
    },
    
    /**
     * Get activity history for parent dashboard
     * @param {string} childUserId - Child's user ID
     * @returns {array} Array of activity entries
     */
    getActivityHistory(childUserId) {
        const activities = JSON.parse(localStorage.getItem(`activities_${childUserId}`) || '[]');
        
        // Filter out sensitive activities
        return activities.filter(activity => {
            return !this.sensitiveDataFields.some(field => 
                activity.type && activity.type.includes(field)
            );
        }).map(activity => ({
            date: activity.date,
            type: activity.type,
            module: activity.module,
            duration: activity.duration
        }));
    },
    
    /**
     * Log activity for a user
     * @param {string} userId - User ID
     * @param {object} activity - Activity object
     */
    logActivity(userId, activity) {
        const activities = JSON.parse(localStorage.getItem(`activities_${userId}`) || '[]');
        activities.push({
            ...activity,
            date: new Date().toISOString(),
            timestamp: Date.now()
        });
        
        // Keep only last 100 activities
        if (activities.length > 100) {
            activities.shift();
        }
        
        localStorage.setItem(`activities_${userId}`, JSON.stringify(activities));
    },
    
    /**
     * Get content access summary for parent
     * @param {string} childUserId - Child's user ID
     * @returns {object} Summary of content accessed
     */
    getContentAccessSummary(childUserId) {
        const activities = JSON.parse(localStorage.getItem(`activities_${childUserId}`) || '[]');
        
        const summary = {
            totalModulesAccessed: 0,
            modulesByAgeGroup: { '8-12': 0, '13-15': 0, '18+': 0 },
            lastAccessed: null,
            totalTimeSpent: 0,
            topModules: []
        };
        
        const moduleCount = {};
        
        activities.forEach(activity => {
            if (activity.type === 'module_viewed') {
                summary.totalModulesAccessed++;
                summary.lastAccessed = activity.date;
                summary.totalTimeSpent += (activity.duration || 0);
                
                if (activity.module) {
                    moduleCount[activity.module] = (moduleCount[activity.module] || 0) + 1;
                }
            }
        });
        
        // Get top 5 modules
        summary.topModules = Object.entries(moduleCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([module, count]) => ({ module, count }));
        
        return summary;
    },
    
    /**
     * Revoke parent access
     * @param {string} childUserId - Child's user ID
     * @returns {object} Result
     */
    revokeParentAccess(childUserId) {
        if (this.parentalLinks[childUserId]) {
            delete this.parentalLinks[childUserId];
            this.save();
            return { status: 'success', message: 'Acesso de pai/mãe revogado' };
        }
        return { status: 'error', message: 'Nenhum pai/mãe vinculado' };
    },
    
    /**
     * Simple hash function for passwords (NOT for production - use bcrypt in real app)
     * @param {string} password - Password to hash
     * @returns {string} Hashed password
     */
    hashPassword(password) {
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return 'hash_' + Math.abs(hash).toString(36);
    },
    
    /**
     * Generate random verification token
     * @returns {string} Random token
     */
    generateToken() {
        return Math.random().toString(36).substring(2, 15) + 
               Math.random().toString(36).substring(2, 15);
    }
};

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        parentalControlsModule.init();
    });
} else {
    parentalControlsModule.init();
}
