// ===== NAVIGATION FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page-content');
    const pageTitle = document.querySelector('.page-title');
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    // Handle navigation clicks
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked nav item
            this.classList.add('active');
            
            // Get page name
            const pageName = this.dataset.page;
            
            // Hide all pages
            pages.forEach(page => page.classList.remove('active'));
            
            // Show selected page
            const selectedPage = document.getElementById(`${pageName}-page`);
            if (selectedPage) {
                selectedPage.classList.add('active');
            }
            
            // Update page title
            const navText = this.querySelector('span').textContent;
            pageTitle.textContent = navText;
            
            // Close sidebar on mobile
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });

    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });

    // ===== TOAST NOTIFICATION =====
    const toast = document.getElementById('toast');
    
    function showToast(title, message, type = 'danger') {
        const toastIcon = toast.querySelector('i');
        const toastTitle = toast.querySelector('h4');
        const toastMessage = toast.querySelector('p');
        
        // Update content
        toastTitle.textContent = title;
        toastMessage.textContent = message;
        
        // Update icon and style based on type
        const iconClasses = {
            'danger': 'fa-shield-alt',
            'success': 'fa-check-circle',
            'warning': 'fa-exclamation-triangle',
            'info': 'fa-info-circle'
        };
        
        toastIcon.className = `fas ${iconClasses[type] || iconClasses.danger}`;
        toast.style.borderLeftColor = `var(--${type}-color)`;
        
        // Show toast
        toast.classList.add('show');
        
        // Auto hide after 5 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 5000);
    }

    // Toast close button
    const toastClose = document.querySelector('.toast-close');
    if (toastClose) {
        toastClose.addEventListener('click', function() {
            toast.classList.remove('show');
        });
    }

    // ===== DEMO NOTIFICATIONS =====
    // Simulate threat detection every 30 seconds
    setInterval(() => {
        const threats = [
            {
                title: 'New Threat Detected!',
                message: 'Phishing attempt blocked from secure-banking@fakmail.com',
                type: 'danger'
            },
            {
                title: 'Suspicious Email!',
                message: 'Possible spoofed sender detected in your inbox',
                type: 'warning'
            },
            {
                title: 'Scan Complete',
                message: 'No threats found in the last 50 emails',
                type: 'success'
            }
        ];
        
        const randomThreat = threats[Math.floor(Math.random() * threats.length)];
        showToast(randomThreat.title, randomThreat.message, randomThreat.type);
    }, 30000);

    // ===== SCAN NOW BUTTON =====
    const scanNowBtn = document.getElementById('scanNow');
    if (scanNowBtn) {
        scanNowBtn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            icon.style.animation = 'spin 1s linear infinite';
            this.disabled = true;
            this.style.opacity = '0.7';
            
            setTimeout(() => {
                icon.style.animation = '';
                this.disabled = false;
                this.style.opacity = '1';
                showToast('Scan Complete', 'Successfully scanned 127 emails. 2 threats detected.', 'success');
            }, 2000);
        });
    }

    // Add spin animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    // ===== EMAIL FILTERS =====
    const filterBtns = document.querySelectorAll('.filter-btn');
    const emailItems = document.querySelectorAll('.email-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            // Filter emails
            emailItems.forEach(email => {
                if (filter === 'all') {
                    email.style.display = 'flex';
                } else {
                    if (email.classList.contains(filter)) {
                        email.style.display = 'flex';
                    } else {
                        email.style.display = 'none';
                    }
                }
            });
        });
    });

    // ===== HONEYPOT TOGGLE =====
    const honeypotSwitch = document.getElementById('honeypotSwitch');
    const toggleLabel = document.querySelector('.toggle-label');

    if (honeypotSwitch) {
        honeypotSwitch.addEventListener('change', function() {
            if (this.checked) {
                toggleLabel.textContent = 'Active';
                toggleLabel.style.color = 'var(--success-color)';
                showToast('Honeypot Activated', 'Scammer engagement system is now active', 'success');
            } else {
                toggleLabel.textContent = 'Inactive';
                toggleLabel.style.color = 'var(--text-muted)';
                showToast('Honeypot Deactivated', 'Scammer engagement system is now inactive', 'info');
            }
        });
    }

    // ===== CHARTS =====
    // Threat Detection Line Chart
    const threatChartCtx = document.getElementById('threatChart');
    if (threatChartCtx) {
        new Chart(threatChartCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                    {
                        label: 'Threats Detected',
                        data: [12, 19, 15, 25, 18, 22, 20],
                        borderColor: '#ef4444',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Safe Emails',
                        data: [165, 158, 172, 148, 169, 155, 163],
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        tension: 0.4,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#cbd5e1',
                            font: {
                                size: 12
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: '#334155'
                        },
                        ticks: {
                            color: '#94a3b8'
                        }
                    },
                    x: {
                        grid: {
                            color: '#334155'
                        },
                        ticks: {
                            color: '#94a3b8'
                        }
                    }
                }
            }
        });
    }

    // Threat Types Pie Chart
    const pieChartCtx = document.getElementById('pieChart');
    if (pieChartCtx) {
        new Chart(pieChartCtx, {
            type: 'doughnut',
            data: {
                labels: ['Phishing', 'Malware', 'Spoofing', 'Other'],
                datasets: [{
                    data: [45, 23, 15, 6],
                    backgroundColor: [
                        '#ef4444',
                        '#f59e0b',
                        '#3b82f6',
                        '#94a3b8'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#cbd5e1',
                            font: {
                                size: 12
                            },
                            padding: 15
                        }
                    }
                }
            }
        });
    }

    // ===== REAL-TIME STATS UPDATE =====
    function updateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const currentValue = parseInt(stat.textContent.replace(/,/g, ''));
            const change = Math.floor(Math.random() * 3) - 1; // Random change between -1 and 1
            const newValue = Math.max(0, currentValue + change);
            stat.textContent = newValue.toLocaleString();
        });
    }

    // Update stats every 10 seconds
    setInterval(updateStats, 10000);

    // ===== SEARCH FUNCTIONALITY =====
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            
            emailItems.forEach(email => {
                const sender = email.querySelector('.email-sender').textContent.toLowerCase();
                const subject = email.querySelector('.email-header h4').textContent.toLowerCase();
                const preview = email.querySelector('.email-preview').textContent.toLowerCase();
                
                if (sender.includes(searchTerm) || subject.includes(searchTerm) || preview.includes(searchTerm)) {
                    email.style.display = 'flex';
                } else {
                    email.style.display = 'none';
                }
            });
        });
    }

    // ===== EMAIL ACTIONS =====
    const viewButtons = document.querySelectorAll('.btn-icon');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const emailItem = this.closest('.email-item');
            const subject = emailItem.querySelector('.email-header h4').textContent;
            showToast('Email Details', `Viewing: ${subject}`, 'info');
        });
    });

    // ===== CHECKBOX SELECT ALL =====
    const emailCheckboxes = document.querySelectorAll('.email-checkbox');
    let selectAllCheckbox = null;

    // Create select all checkbox in the monitoring controls
    const monitoringControls = document.querySelector('.monitoring-controls');
    if (monitoringControls && emailCheckboxes.length > 0) {
        const selectAllContainer = document.createElement('div');
        selectAllContainer.innerHTML = `
            <label style="display: flex; align-items: center; gap: 8px; color: var(--text-secondary); cursor: pointer;">
                <input type="checkbox" id="selectAll" style="width: 18px; height: 18px; cursor: pointer;">
                <span style="font-size: 14px;">Select All</span>
            </label>
        `;
        monitoringControls.insertBefore(selectAllContainer, monitoringControls.firstChild);
        
        selectAllCheckbox = document.getElementById('selectAll');
        
        selectAllCheckbox.addEventListener('change', function() {
            emailCheckboxes.forEach(checkbox => {
                checkbox.checked = this.checked;
            });
        });

        // Update select all checkbox based on individual checkboxes
        emailCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const allChecked = Array.from(emailCheckboxes).every(cb => cb.checked);
                const someChecked = Array.from(emailCheckboxes).some(cb => cb.checked);
                
                if (selectAllCheckbox) {
                    selectAllCheckbox.checked = allChecked;
                    selectAllCheckbox.indeterminate = someChecked && !allChecked;
                }
            });
        });
    }

    // ===== SETTINGS TOGGLES =====
    const settingSwitches = document.querySelectorAll('.settings-section .switch input');
    settingSwitches.forEach(switchEl => {
        switchEl.addEventListener('change', function() {
            const settingName = this.closest('.setting-item').querySelector('h4').textContent;
            const status = this.checked ? 'enabled' : 'disabled';
            showToast('Setting Updated', `${settingName} has been ${status}`, 'success');
        });
    });

    // ===== EXPORT REPORT BUTTON =====
    const exportBtn = document.querySelector('.threats-header .btn-primary');
    if (exportBtn) {
        exportBtn.addEventListener('click', function() {
            showToast('Exporting Report', 'Your threat analysis report is being generated...', 'info');
            
            setTimeout(() => {
                showToast('Export Complete', 'Report downloaded successfully', 'success');
            }, 2000);
        });
    }

    // ===== HONEYPOT SESSION ACTIONS =====
    const viewConversationBtns = document.querySelectorAll('.session-actions .btn-sm:first-child');
    const endSessionBtns = document.querySelectorAll('.session-actions .btn-danger');

    viewConversationBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const sessionName = this.closest('.honeypot-session').querySelector('.session-header h4').textContent;
            showToast('Opening Conversation', `Loading conversation with: ${sessionName}`, 'info');
        });
    });

    endSessionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const session = this.closest('.honeypot-session');
            const sessionName = session.querySelector('.session-header h4').textContent;
            
            if (confirm(`Are you sure you want to end the session with ${sessionName}?`)) {
                session.style.opacity = '0.5';
                session.querySelector('.session-status').classList.remove('active');
                showToast('Session Ended', `Successfully ended session with ${sessionName}`, 'success');
            }
        });
    });

    // ===== THREAT DETAIL ACTIONS =====
    const viewEmailBtns = document.querySelectorAll('.threat-actions .btn-secondary');
    const deleteBlockBtns = document.querySelectorAll('.threat-actions .btn-danger');

    viewEmailBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const threatCard = this.closest('.threat-detail-card');
            const threatTitle = threatCard.querySelector('h3').textContent;
            showToast('Opening Email', `Viewing: ${threatTitle}`, 'info');
        });
    });

    deleteBlockBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const threatCard = this.closest('.threat-detail-card');
            const threatTitle = threatCard.querySelector('h3').textContent;
            
            if (confirm(`Are you sure you want to delete and block this threat?\n\n${threatTitle}`)) {
                threatCard.style.opacity = '0.5';
                showToast('Threat Blocked', 'Email deleted and sender blocked successfully', 'success');
                
                setTimeout(() => {
                    threatCard.remove();
                }, 1000);
            }
        });
    });

    // ===== GMAIL RECONNECT BUTTON =====
    const reconnectBtn = document.querySelector('.settings-section .btn-secondary');
    if (reconnectBtn) {
        reconnectBtn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            icon.style.animation = 'spin 1s linear';
            this.disabled = true;
            
            showToast('Reconnecting', 'Establishing connection with Gmail...', 'info');
            
            setTimeout(() => {
                icon.style.animation = '';
                this.disabled = false;
                showToast('Connected', 'Successfully reconnected to Gmail', 'success');
            }, 2000);
        });
    }

    // ===== TIME FILTER FOR CHART =====
    const timeFilter = document.querySelector('.time-filter');
    if (timeFilter) {
        timeFilter.addEventListener('change', function() {
            showToast('Updating Chart', `Loading data for: ${this.value}`, 'info');
        });
    }

    // ===== INITIAL WELCOME TOAST =====
    setTimeout(() => {
        showToast('Welcome to Genjutsu', 'Your Gmail is being protected. All systems active.', 'success');
    }, 1000);

    // ===== NOTIFICATION BADGE CLICK =====
    const notificationBtn = document.querySelector('.notification-btn');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', function() {
            // Navigate to threats page
            const threatsNavItem = document.querySelector('.nav-item[data-page="threats"]');
            if (threatsNavItem) {
                threatsNavItem.click();
            }
        });
    }

    // ===== ANIMATE NUMBERS ON PAGE LOAD =====
    function animateNumber(element, target, duration = 1000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    }

    // Animate stats on dashboard load
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target;
                const targetValue = parseInt(statNumber.textContent.replace(/,/g, ''));
                animateNumber(statNumber, targetValue);
                observer.unobserve(statNumber);
            }
        });
    });

    document.querySelectorAll('.stat-number').forEach(stat => {
        observer.observe(stat);
    });
});
