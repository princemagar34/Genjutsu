# Genjutsu - Gmail Security System

## 🛡️ Overview
Genjutsu is an AI-powered Gmail security system designed to provide automated, real-time protection against phishing attacks. Built for small businesses and individual users, it offers enterprise-level security through an accessible, user-friendly interface.

## ✨ Current Features

### 1. **Dashboard Overview**
- Real-time statistics display
- Total emails monitored
- Threats blocked counter
- Safe emails count
- Active honeypot sessions
- Interactive charts (threat detection over time, threat type distribution)
- Recent threats list with severity indicators

### 2. **Email Monitoring**
- Real-time email scanning
- Email filtering (All, Safe, Suspicious, Dangerous)
- Visual threat indicators
- Email preview with sender information
- Threat tagging system
- Bulk email selection
- Search functionality

### 3. **Threat Detection & Analysis**
- Multi-layer email analysis
- Comprehensive threat categorization
- Detailed threat information cards
- Threat severity classification (High, Medium, Low)
- Threat type distribution analytics
- Export report functionality

### 4. **Honeypot Mode**
- Automated scammer engagement system
- Active/Inactive toggle
- Real-time session monitoring
- Time-wasted tracking
- Conversation viewer
- Session management (end sessions)
- Protected victims counter

### 5. **Settings & Configuration**
- Real-time alert toggles
- Email notification preferences
- Sound alert settings
- Automatic threat blocking
- Multi-layer analysis configuration
- Link scanning options
- Gmail integration status
- Account reconnection

### 6. **Notification System**
- Toast notifications for threats
- Real-time alerts
- Customizable notification preferences
- Auto-dismiss functionality
- Multiple notification types (danger, warning, success, info)

## 🎨 UI/UX Features

- **Dark Mode Theme**: Modern dark interface optimized for extended use
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Smooth Animations**: Page transitions, hover effects, and loading states
- **Interactive Charts**: Real-time data visualization using Chart.js
- **Intuitive Navigation**: Easy-to-use sidebar navigation
- **Visual Feedback**: Clear status indicators and progress animations

## 📁 File Structure

```
genjutsu/
│
├── index.html          # Main HTML structure
├── styles.css          # Complete styling (separate file)
├── script.js           # All JavaScript functionality (separate file)
└── README.md          # Documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for CDN resources (Font Awesome, Chart.js)

### Installation
1. Clone or download all three files (index.html, styles.css, script.js)
2. Ensure all files are in the same directory
3. Open `index.html` in your web browser

### Usage
- Navigate through pages using the sidebar menu
- Click on emails to view details
- Use filters to sort emails by threat level
- Toggle honeypot mode on/off as needed
- Adjust settings according to your preferences

## 🔧 Technical Implementation

### Technologies Used
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript**: Pure JS without framework dependencies
- **Chart.js**: Data visualization
- **Font Awesome**: Icon library

### Key JavaScript Functions

#### Navigation System
```javascript
- Page switching
- Active state management
- Mobile menu toggle
- Dynamic page title updates
```

#### Email Monitoring
```javascript
- Real-time filtering
- Search functionality
- Bulk selection
- Email action handlers
```

#### Notification System
```javascript
- Toast notifications
- Auto-dismiss timers
- Multiple notification types
- Custom messaging
```

#### Chart Rendering
```javascript
- Line chart for threat trends
- Doughnut chart for threat distribution
- Real-time data updates
```

## 🔮 Features to Implement (Based on Your Project Proposal)

### Phase 1: Core Security Features
1. **Gmail API Integration**
   - OAuth 2.0 authentication
   - Real-time email fetching
   - Email reading and parsing
   - Rate limit handling

2. **AI-Powered Threat Detection**
   - Machine learning model integration
   - Sender verification
   - Content analysis
   - URL/link scanning
   - Domain reputation checking
   - SPF/DKIM/DMARC validation

3. **Multi-Layer Analysis Engine**
   ```javascript
   // Implement these layers:
   - Layer 1: Sender authentication
   - Layer 2: Content pattern analysis
   - Layer 3: Link/URL verification
   - Layer 4: Attachment scanning
   - Layer 5: Context-based detection
   ```

### Phase 2: Advanced Features

4. **Honeypot Implementation**
   ```javascript
   // AI Response Generation
   - Natural language processing
   - Context-aware responses
   - Time-wasting strategies
   - Scammer profiling
   - Conversation logging
   ```

5. **Alert System Enhancement**
   - Browser notifications
   - Email summaries
   - SMS alerts (optional)
   - Slack/Discord integration
   - Custom alert rules

6. **Machine Learning Pipeline**
   ```python
   # Backend ML Implementation
   - Data collection
   - Model training
   - Continuous learning
   - False positive reduction
   - Accuracy improvement
   ```

### Phase 3: Database & Backend

7. **Database Schema**
   ```sql
   -- Required tables:
   - users
   - emails
   - threats
   - honeypot_sessions
   - settings
   - notifications
   - ml_training_data
   ```

8. **Backend API Endpoints**
   ```
   POST   /api/auth/login
   POST   /api/auth/gmail-connect
   GET    /api/emails/scan
   GET    /api/threats/list
   POST   /api/threats/block
   GET    /api/honeypot/sessions
   POST   /api/honeypot/respond
   GET    /api/analytics/stats
   POST   /api/settings/update
   ```

## 📊 Integration Requirements

### Gmail API Setup
```javascript
// Configuration needed:
const GMAIL_CONFIG = {
    clientId: 'YOUR_CLIENT_ID',
    apiKey: 'YOUR_API_KEY',
    scope: 'https://www.googleapis.com/auth/gmail.readonly',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest']
};
```

### Machine Learning Model
```python
# Model requirements:
- Training dataset: 10,000+ labeled emails
- Features: sender, subject, body, links, attachments
- Algorithm: Random Forest / Neural Network
- Accuracy target: >95%
- False positive rate: <2%
```

## 🔐 Security Considerations

1. **API Key Management**
   - Use environment variables
   - Never commit keys to repository
   - Implement key rotation

2. **Data Privacy**
   - Encrypt sensitive data
   - GDPR compliance
   - User consent forms
   - Data retention policies

3. **Rate Limiting**
   - Gmail API quota management
   - Request batching
   - Queue implementation
   - Error handling

## 🧪 Testing Strategy

### Unit Tests
- Email parsing functions
- Threat detection logic
- Honeypot response generation
- Settings management

### Integration Tests
- Gmail API connection
- Database operations
- ML model predictions
- Notification delivery

### User Acceptance Tests
- Interface usability
- Feature completeness
- Performance benchmarks
- Cross-browser compatibility

## 📈 Performance Optimization

1. **Frontend**
   - Code minification
   - Image optimization
   - Lazy loading
   - Caching strategies

2. **Backend**
   - Database indexing
   - Query optimization
   - API response caching
   - Load balancing

## 🐛 Known Issues & Limitations

- Charts use static data (needs real-time data integration)
- No actual Gmail connection (requires API implementation)
- No backend server (frontend-only demo)
- No real threat detection (needs ML model)
- No database persistence (uses local state only)

## 🛠️ Future Enhancements

1. **AI Assistant Integration**
   - ChatGPT-powered email analysis
   - Natural language threat explanations
   - Conversational interface

2. **Mobile App**
   - Native iOS/Android apps
   - Push notifications
   - Mobile-optimized UI

3. **Browser Extension**
   - Chrome/Firefox extension
   - In-browser email scanning
   - Quick access toolbar

4. **Advanced Analytics**
   - Predictive threat modeling
   - Trend analysis
   - Custom reporting
   - Data export options

5. **Team Features**
   - Multi-user support
   - Role-based access
   - Shared threat intelligence
   - Team dashboards

## 📝 Development Roadmap

### Milestone 1: Foundation (Weeks 1-4)
- ✅ UI/UX Design
- ✅ Frontend Implementation
- ⏳ Gmail API Integration
- ⏳ Database Setup

### Milestone 2: Core Features (Weeks 5-8)
- ⏳ Threat Detection Engine
- ⏳ Multi-layer Analysis
- ⏳ Notification System
- ⏳ Settings Management

### Milestone 3: Advanced Features (Weeks 9-12)
- ⏳ Honeypot Implementation
- ⏳ ML Model Integration
- ⏳ Analytics Dashboard
- ⏳ Report Generation

### Milestone 4: Testing & Deployment (Weeks 13-16)
- ⏳ Comprehensive Testing
- ⏳ Bug Fixes
- ⏳ Performance Optimization
- ⏳ Production Deployment

## 💡 Implementation Tips

### For Gmail API Integration
1. Register your app in Google Cloud Console
2. Enable Gmail API
3. Configure OAuth 2.0 credentials
4. Implement token refresh mechanism
5. Handle rate limits gracefully

### For ML Model
1. Collect diverse phishing email dataset
2. Feature engineering (sender, content, links)
3. Train multiple models and compare
4. Implement ensemble methods
5. Continuous model retraining

### For Honeypot Mode
1. Create convincing user personas
2. Implement delay mechanisms
3. Track scammer patterns
4. Generate context-aware responses
5. Maintain conversation logs

## 📚 Resources

### Documentation
- [Gmail API Documentation](https://developers.google.com/gmail/api)
- [OAuth 2.0 Guide](https://oauth.net/2/)
- [Chart.js Docs](https://www.chartjs.org/docs/)
- [Font Awesome Icons](https://fontawesome.com/icons)

### Learning Materials
- Phishing detection techniques
- Machine learning for cybersecurity
- Email security best practices
- API rate limiting strategies

## 👥 Contributing

This is a student project for Islington College. Contributions, suggestions, and feedback are welcome!

## 📄 License

Educational Project - London Metropolitan University / Islington College

## 👤 Author

**Prince Paija Magar**
- Student ID: 23047374
- Email: prince@gmail.com
- College: Islington College
- Supervisor: Ayush Bhakta Pradhanang, Aman Thakur

## 🙏 Acknowledgments

- Ayush Bhakta Pradhanang (Internal Supervisor)
- Aman Thakur (External Supervisor)
- Islington College
- London Metropolitan University

---

## 🚀 Quick Start Commands

```bash
# For local development server (optional)
python -m http.server 8000

# Or with Node.js
npx http-server

# Then open: http://localhost:8000
```

## 📞 Support

For questions or issues:
1. Check the documentation
2. Review the code comments
3. Contact supervisors
4. Refer to Gmail API docs

---

**Note**: This is a UI prototype/demo. Full functionality requires backend implementation, Gmail API integration, and ML model deployment as outlined in the project proposal.
