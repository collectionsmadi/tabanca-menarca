# Tabanca Menarca Website - Production Platform TODO

## Phase 1: Design System & Project Setup ✓
- [x] Extract mobile app design system (colors, fonts, spacing)
- [x] Create website project structure
- [ ] Set up HTML/CSS/JS with mobile app design consistency
- [ ] Create design system documentation

## Phase 2: User Registration & Authentication (PRIORITY 1) ✅ COMPLETE
- [x] Create registration page (email, password, confirm password, nickname)
- [x] Implement age group selection (8-12, 13-15, 18+)
- [x] Build email verification system for 13-15 age group
- [x] Add parental consent flow for 13-15 users (parent email verification)
- [x] Create login page with session management
- [x] Implement localStorage for user sessions
- [x] Add password recovery functionality
- [x] Create user profile page
- [x] Build account settings page
- [x] Implement logout functionality

## Phase 3: Menstrual Cycle Calculator (PRIORITY 2) ✅ COMPLETE
- [x] Build cycle tracking interface
- [x] Implement local storage for cycle data
- [x] Create cycle prediction algorithm (28-day standard, customizable)
- [x] Add ovulation date calculation
- [x] Build calendar view for cycle tracking
- [x] Add cycle insights and statistics
- [x] Implement data sync across devices (localStorage + backend API)
- [x] Create cycle export functionality
- [x] Add period flow tracking (light/medium/heavy)
- [x] Build symptoms tracker

## Phase 6: Notifications & Localization (PRIORITY 6) ✅ COMPLETE
- [x] Implement browser notifications API
- [x] Create period reminder notifications
- [x] Add ovulation reminder notifications
- [x] Build notification preferences page
- [x] Add notification scheduling
- [x] Create notification history/log
- [ ] Add SMS notifications (optional)
- [ ] Add multi-language support
- [ ] Implement geolocation for local resources
- [ ] Add timezone support

## Phase 4: Content Modules (PRIORITY 3) ✅ COMPLETE
- [x] Create "What is Menstruation?" module with book illustrations
- [x] Create "What is Ovulation?" module
- [x] Create "Protection & Products" module with market options
- [x] Create "Menstrual Products Guide" module
- [x] Add content filtering by age group (8-12, 13-15, 18+)
- [x] Implement content access control
- [x] Extract and integrate book illustrations as design elements
- [x] Add content search functionality
- [x] Create content recommendation system
- [x] Add content rating and review system (1-5 stars)
- [x] Create "Saved for Later" feature with persistence
- [x] Add content sharing functionality

## Phase 5: Parental Controls & Privacy (PRIORITY 4) ✅ COMPLETE
- [x] Build parental account linking system
- [x] Create parent dashboard (view content only)
- [x] Hide private health data from parents (cycle, ovulation dates)
- [x] Show content access history for parents
- [x] Email verification for parent accounts
- [x] Link child account to parent account
- [x] Parental consent workflow
- [x] Privacy settings page for children
- [x] Hide private health data from parents (cycle dates, ovulation, symptoms)
- [x] Implement privacy settings page
- [x] Add data encryption for sensitive information
- [x] Create privacy policy page
- [ ] Add terms of service page
- [ ] Implement data deletion functionality

## Phase 6: Doctor Community Forum (PRIORITY 5)
- [ ] Create forum interface for 18+ users only
- [ ] Build discussion thread creation
- [ ] Add doctor verification system
- [ ] Implement content moderation queue
- [ ] Create pin/save functionality for users
- [ ] Add share to social media features
- [ ] Build search functionality for forum posts
- [ ] Create doctor profile pages
- [ ] Add reputation/badge system for doctors
- [ ] Implement comment system for forum posts

## Phase 7: Localization & Additional Features
- [ ] Build localization system (Portuguese variants)
- [ ] Add language switching
- [ ] Implement location-based features
- [ ] Create timezone support
- [ ] Add accessibility features (WCAG compliance)
- [ ] Create dark mode support

## Phase 7: Deploy & Testing (FINAL) ✅ COMPLETE
- [x] Test user registration flow
- [x] Test age verification system
- [x] Test cycle calculator accuracy
- [x] Test parental controls
- [x] Test notification system
- [x] Security testing (password hashing, data protection)
- [x] Performance testing
- [x] Mobile responsiveness testing
- [x] Create deployment documentation (DEPLOYMENT_GUIDE.md)
- [ ] Deploy to production (GitHub Pages, Netlify, or custom domain)
- [ ] Set up monitoring and analytics
- [x] Create user guide and FAQ (USER_GUIDE.md)
- [x] Create testing checklist (TESTING_CHECKLIST.md)
- [x] Create README (README_PT.md)

---

## Design System (from mobile app)

### Colors
- **Primary:** #0a7ea4 (Teal)
- **Background Light:** #ffffff
- **Background Dark:** #151718
- **Foreground Light:** #11181C
- **Foreground Dark:** #ECEDEE
- **Muted Light:** #687076
- **Muted Dark:** #9BA1A6
- **Border Light:** #E5E7EB
- **Border Dark:** #334155
- **Success Light:** #22C55E
- **Success Dark:** #4ADE80
- **Warning Light:** #F59E0B
- **Warning Dark:** #FBBF24
- **Error Light:** #EF4444
- **Error Dark:** #F87171

### Typography
- Font Family: System fonts (matching mobile app)
- Heading Sizes: Consistent with mobile app
- Line Height: 1.5x for readability

### Spacing
- Base unit: 8px
- Padding: 8px, 16px, 24px, 32px
- Margin: Same as padding

---

## Book Integration
- Extract blood drop color for menstruation illustrations
- Use small focused elements from book pages
- Create visual representations matching book style
- Maintain cultural authenticity from Guinea-Bissau context
- Use Leonor character throughout platform

---

## Age Group Content Access Rules

### 8-12 Years
- Can access: 8-12 content only
- Cannot access: 13-15, 18+ content
- Features: Basic education, Leonor guide, cycle tracker (read-only)

### 13-15 Years
- Can access: 8-12 + 13-15 content
- Cannot access: 18+ doctor forum
- Features: Full cycle tracker, notifications, community (moderated)
- Requires: Parental consent (email verification)
- Parents can see: Content accessed, but NOT cycle data or private health info

### 18+ Years
- Can access: All content including doctor forum
- Features: Full cycle tracker, notifications, doctor community, research access
- No parental controls

---

**Last Updated:** April 2026
**Status:** Planning Phase - Ready for Development
**Next Steps:** Phase 2 - User Registration & Authentication
