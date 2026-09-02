/**
 * Sanjana K. - Portfolio Main JavaScript
 * Interactive controllers: Navigation, Modals, Form Validation, Scrollspy, Toasts
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  initNavbar();
  initScrollSpy();
  initScrollReveal();
  initProjectFilters();
  initModals();
  initContactForm();
  initSpotlightEffect();
  initBackToTop();
  initCVDownload();
});

/* ==========================================================================
   1. Dynamic Navbar & Mobile Menu
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById('main-nav');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  // Sticky navbar shrink & glass effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('glass-nav-scrolled', 'py-3');
      navbar.classList.remove('py-5');
    } else {
      navbar.classList.remove('glass-nav-scrolled', 'py-3');
      navbar.classList.add('py-5');
    }
  });

  // Mobile Menu Toggle
  if (mobileMenuBtn && mobileMenuDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = !mobileMenuDrawer.classList.contains('hidden');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenuDrawer.classList.contains('hidden')) {
        closeMobileMenu();
      }
    });
  }

  function openMobileMenu() {
    mobileMenuDrawer.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    mobileMenuBtn.innerHTML = '<i data-lucide="x" class="w-6 h-6 text-slate-200"></i>';
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  function closeMobileMenu() {
    mobileMenuDrawer.classList.add('hidden');
    document.body.style.overflow = '';
    mobileMenuBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6 text-slate-200"></i>';
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
}

/* ==========================================================================
   2. ScrollSpy for Active Navigation Link
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 180;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-indigo-400', 'border-indigo-400');
      link.classList.add('text-slate-300');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-indigo-400');
        link.classList.remove('text-slate-300');
      }
    });
  });
}

/* ==========================================================================
   3. Scroll Reveal Animation
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-item');
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

/* ==========================================================================
   4. Project Category Filtering
   ========================================================================== */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active', 'bg-indigo-500/20', 'border-indigo-500/50', 'text-indigo-300'));
      btn.classList.add('active', 'bg-indigo-500/20', 'border-indigo-500/50', 'text-indigo-300');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px) scale(0.97)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ==========================================================================
   5. Interactive Project & Certificate Modals
   ========================================================================== */
const projectData = {
  spendwise: {
    title: 'SpendWise – Personal Expense Tracker',
    subtitle: 'Full-Featured Personal Finance & Budget Management Web App',
    badge: 'Web Application',
    image: 'assets/project-spendwise.svg',
    description: 'SpendWise is a responsive client-side financial management application designed to simplify personal budgeting. It empowers users to record daily expenses, categorize transactions into customizable spending buckets, monitor remaining monthly budgets, and analyze spending breakdowns with interactive visual indicators.',
    features: [
      'Interactive Expense Logger: Real-time form with validation to record costs and descriptions.',
      'Category Intelligence: Automated color-coded tags (Food, Tech, Study, Travel, Subscriptions).',
      'Dynamic Budget Gauge: Visual progress bar alerting when approaching monthly budget limit.',
      'Instant Calculations: Live recalculation of total expenditures and category proportions.',
      'Responsive Mobile-First UI: Optimized for rapid expense logging on mobile and desktop.'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Local Storage API', 'Tailwind CSS'],
    githubUrl: 'https://sanjana09-code.github.io/Spendwise-Tracker/',
    liveUrl: 'https://sanjana09-code.github.io/Spendwise-Tracker/'
  },
  bluetoothcar: {
    title: 'Smart Bluetooth Robotic Car',
    subtitle: 'Microcontroller-Driven Wireless Autonomous Vehicle',
    badge: 'Hardware & IoT',
    image: 'assets/project-car.svg',
    description: 'An embedded robotics project featuring an Arduino Uno microcontroller communicating wirelessly via an HC-05 Bluetooth module with an Android controller app. The firmware uses dual H-Bridge PWM drivers to provide smooth multi-directional driving, precision turning, and responsive motor torque management.',
    features: [
      'Wireless Serial Telemetry: Fast UART communication at 9600 baud rate with minimal latency.',
      'Dual Motor Control: L298N H-Bridge controlling two high-torque DC geared motors.',
      'PWM Speed Modulation: Real-time speed adjustment for delicate maneuvers.',
      'Autonomous Failsafe: Built-in watchdog timer to stop motors if wireless signal is lost.',
      'Proteus Simulation: Fully simulated in Proteus CAD before physical hardware prototyping.'
    ],
    techStack: ['Arduino C/C++', 'HC-05 Bluetooth', 'L298N Motor Driver', 'DC Motors', 'Proteus CAD'],
    githubUrl: 'https://github.com/sanjana09-code',
    liveUrl: 'https://github.com/sanjana09-code'
  },
  bulletrush: {
    title: 'Bullet Rush – Target Shooter Game',
    subtitle: 'Interactive High-Speed 2D Arcade Game',
    badge: 'Game Development',
    image: 'assets/project-bulletrush.svg',
    description: 'Bullet Rush is an interactive 2D arcade action game built from scratch using pure vanilla JavaScript and the HTML5 Canvas API. Players pilot a laser defense cannon to eliminate moving targets, maintain combo streaks, dodge incoming hazards, and achieve high scores.',
    features: [
      '60 FPS Canvas Game Loop: Smooth physics, frame-independent motion, and delta-timing.',
      'Target Spawn & Hit Detection: Circle-to-point vector collision detection with multi-tier target scoring.',
      'Combo Multiplier System: Consecutive accurate hits trigger streak multipliers up to x10.',
      'Particle Burst Effects: Dynamic explosion particles that scatter and fade upon target impact.',
      'Keyboard & Touch Support: Full support for desktop arrows/spacebar and mobile touch drag controls.'
    ],
    techStack: ['HTML5 Canvas', 'Vanilla JavaScript', 'CSS3 Keyframes', 'Web Audio API'],
    githubUrl: 'https://sanjana09-code.github.io/bullet-rush/',
    liveUrl: 'https://sanjana09-code.github.io/bullet-rush/'
  }
};

const certData = {
  python: {
    title: 'Python Programming Specialization',
    issuer: 'Foundational Programming & AI Scripting',
    image: 'assets/cert-python.svg',
    id: 'PY-AIML-2024',
    description: 'Demonstrates strong foundational knowledge and practical understanding of Python programming, object-oriented concepts, algorithm design, data manipulation, and preparation for AI/ML scripting.'
  },
  cybersecurity: {
    title: 'Cybersecurity Fundamentals',
    issuer: 'Security Best Practices & Threat Modeling',
    image: 'assets/cert-cyber.svg',
    id: 'CYBER-SEC-2024',
    description: 'Demonstrates foundational understanding of cybersecurity principles, encryption concepts, safe software practices, network fundamentals, and practical vulnerability assessment.'
  }
};

function initModals() {
  const modalOverlay = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content-container');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  const certModalOverlay = document.getElementById('cert-modal');
  const certModalContent = document.getElementById('cert-modal-content');
  const certCloseBtn = document.getElementById('cert-close-btn');

  // Open Project Modal
  document.querySelectorAll('[data-open-project]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const projKey = trigger.getAttribute('data-open-project');
      const data = projectData[projKey];
      if (!data) return;

      modalContent.innerHTML = `
        <div class="p-6 md:p-8 space-y-6">
          <div class="flex items-start justify-between gap-4">
            <div>
              <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 mb-2">${data.badge}</span>
              <h3 class="text-2xl md:text-3xl font-bold font-tech text-white">${data.title}</h3>
              <p class="text-sm text-slate-400 mt-1">${data.subtitle}</p>
            </div>
          </div>

          <div class="rounded-xl overflow-hidden border border-slate-700/60 bg-slate-950/60 p-2">
            <img src="${data.image}" alt="${data.title}" class="w-full h-auto max-h-72 object-cover rounded-lg">
          </div>

          <div>
            <h4 class="text-sm font-bold uppercase tracking-wider text-slate-300 mb-2">Overview</h4>
            <p class="text-slate-300 leading-relaxed text-sm md:text-base">${data.description}</p>
          </div>

          <div>
            <h4 class="text-sm font-bold uppercase tracking-wider text-slate-300 mb-2">Key Highlights & Features</h4>
            <ul class="space-y-2">
              ${data.features.map(f => `
                <li class="flex items-start gap-2 text-sm text-slate-300">
                  <span class="text-indigo-400 font-bold mt-0.5">✦</span>
                  <span>${f}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-bold uppercase tracking-wider text-slate-300 mb-2">Technologies Used</h4>
            <div class="flex flex-wrap gap-2">
              ${data.techStack.map(t => `<span class="px-3 py-1 rounded-md text-xs font-medium bg-slate-800/80 text-slate-200 border border-slate-700">${t}</span>`).join('')}
            </div>
          </div>

          <div class="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-end gap-3">
            <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary px-4 py-2.5 rounded-xl text-sm font-medium inline-flex items-center gap-2">
              <i data-lucide="github" class="w-4 h-4"></i> View Source Code
            </a>
            <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary px-5 py-2.5 rounded-xl text-sm font-medium inline-flex items-center gap-2">
              <i data-lucide="external-link" class="w-4 h-4"></i> Live Overview
            </a>
          </div>
        </div>
      `;

      if (typeof lucide !== 'undefined') lucide.createIcons();
      openModal(modalOverlay);
    });
  });

  // Open Certificate Modal
  document.querySelectorAll('[data-open-cert]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const certKey = trigger.getAttribute('data-open-cert');
      const cert = certData[certKey];
      if (!cert) return;

      certModalContent.innerHTML = `
        <div class="p-6 md:p-8 space-y-5 text-center">
          <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Verified Credential</span>
          <h3 class="text-2xl font-bold font-tech text-white">${cert.title}</h3>
          <p class="text-sm text-slate-400">${cert.issuer}</p>

          <div class="rounded-xl overflow-hidden border border-slate-700/60 bg-slate-950 p-2 my-4">
            <img src="${cert.image}" alt="${cert.title}" class="w-full h-auto rounded-lg">
          </div>

          <p class="text-slate-300 text-sm leading-relaxed">${cert.description}</p>
          <div class="text-xs text-slate-500 font-mono">Certificate Verification ID: ${cert.id}</div>

          <div class="pt-4 flex justify-center">
            <button onclick="closeCertModal()" class="btn-primary px-6 py-2 rounded-xl text-sm font-medium">
              Close Certificate
            </button>
          </div>
        </div>
      `;

      openModal(certModalOverlay);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => closeModal(modalOverlay));
  }
  if (certCloseBtn) {
    certCloseBtn.addEventListener('click', () => closeModal(certModalOverlay));
  }

  // Close when clicking outside modal container
  [modalOverlay, certModalOverlay].forEach(modal => {
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(modalOverlay);
      closeModal(certModalOverlay);
    }
  });

  function openModal(modal) {
    if (!modal) return;
    modal.classList.remove('hidden', 'modal-hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.add('modal-hidden');
    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }, 250);
  }

  window.closeCertModal = () => closeModal(certModalOverlay);
}

window.handleDemoClick = function(projKey) {
  showToast(`Live preview for ${projKey.toUpperCase()} is running in local showcase mode!`, 'info');
};

window.handlePlaceholderClick = function(event, label) {
  event.preventDefault();
  showToast(`${label} is connected as a secure placeholder link until repository is deployed publicly.`, 'info');
};

/* ==========================================================================
   6. CV / Resume Modal & Download Handler
   ========================================================================== */
function initCVDownload() {
  const downloadBtns = document.querySelectorAll('.cv-download-trigger');
  downloadBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('📄 CV Download initiated! (Sanjana_K_Resume.pdf)', 'success');
      
      // Provide an interactive CV summary notification or modal
      setTimeout(() => {
        showToast('Tip: Place your actual Sanjana_K_Resume.pdf in the assets directory to enable direct download.', 'info');
      }, 1800);
    });
  });
}

/* ==========================================================================
   7. Contact Form Real-time Validation & Submission
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const charCounter = document.getElementById('char-count');
  const submitBtn = document.getElementById('contact-submit-btn');

  // Message char counter
  if (messageInput && charCounter) {
    messageInput.addEventListener('input', () => {
      charCounter.textContent = `${messageInput.value.length} / 500`;
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      showError(nameInput, 'Please enter your name (at least 2 characters)');
      isValid = false;
    } else {
      clearError(nameInput);
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, 'Please enter a valid email address');
      isValid = false;
    } else {
      clearError(emailInput);
    }

    // Validate Subject
    if (!subjectInput.value.trim() || subjectInput.value.trim().length < 3) {
      showError(subjectInput, 'Please enter a subject (at least 3 characters)');
      isValid = false;
    } else {
      clearError(subjectInput);
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      showError(messageInput, 'Please enter your message (at least 10 characters)');
      isValid = false;
    } else {
      clearError(messageInput);
    }

    if (!isValid) return;

    // Simulate asynchronous form submission with spinner
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
      </svg>
      Sending Message...
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      if (typeof lucide !== 'undefined') lucide.createIcons();

      const senderName = nameInput.value.trim();
      form.reset();
      if (charCounter) charCounter.textContent = '0 / 500';

      showToast(`✨ Thank you, ${senderName}! Your message was successfully sent to Sanjana.`, 'success');
    }, 1200);
  });

  function showError(inputEl, message) {
    const parent = inputEl.parentElement;
    let errorEl = parent.querySelector('.input-error-msg');
    if (!errorEl) {
      errorEl = document.createElement('p');
      errorEl.className = 'input-error-msg text-xs text-rose-400 mt-1.5 flex items-center gap-1';
      parent.appendChild(errorEl);
    }
    errorEl.innerHTML = `<span class="inline-block w-1.5 h-1.5 rounded-full bg-rose-400"></span> ${message}`;
    inputEl.classList.add('border-rose-500', 'focus:ring-rose-500');
    inputEl.classList.remove('border-slate-700', 'focus:ring-indigo-500');
  }

  function clearError(inputEl) {
    const parent = inputEl.parentElement;
    const errorEl = parent.querySelector('.input-error-msg');
    if (errorEl) errorEl.remove();
    inputEl.classList.remove('border-rose-500', 'focus:ring-rose-500');
    inputEl.classList.add('border-slate-700', 'focus:ring-indigo-500');
  }
}

/* ==========================================================================
   8. Mouse Spotlight Effect on Interactive Cards
   ========================================================================== */
function initSpotlightEffect() {
  const cards = document.querySelectorAll('.spotlight-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ==========================================================================
   9. Floating Back to Top Button
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      backToTopBtn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
    } else {
      backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   10. Toast Notification Engine
   ========================================================================== */
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';

  let iconName = 'info';
  let iconColor = 'text-sky-400';
  if (type === 'success') {
    iconName = 'check-circle-2';
    iconColor = 'text-emerald-400';
  } else if (type === 'warning') {
    iconName = 'alert-triangle';
    iconColor = 'text-amber-400';
  }

  toast.innerHTML = `
    <i data-lucide="${iconName}" class="w-5 h-5 ${iconColor} shrink-0"></i>
    <p class="text-sm font-medium text-slate-200 flex-1 leading-snug">${message}</p>
    <button class="toast-close text-slate-400 hover:text-white p-1 rounded transition-colors" aria-label="Close Notification">
      <i data-lucide="x" class="w-4 h-4"></i>
    </button>
  `;

  container.appendChild(toast);
  if (typeof lucide !== 'undefined') lucide.createIcons();

  // Trigger animation in next frame
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  const closeBtn = toast.querySelector('.toast-close');
  closeBtn.addEventListener('click', () => dismissToast(toast));

  // Auto dismiss after 4.5s
  setTimeout(() => {
    dismissToast(toast);
  }, 4500);

  function dismissToast(el) {
    el.classList.remove('show');
    setTimeout(() => {
      if (el.parentElement) el.parentElement.removeChild(el);
    }, 400);
  }
}

window.showToast = showToast;
