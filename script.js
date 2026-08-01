/* ============================================================
   ASSADUZZAMAN MUNNA — Portfolio Script
   ============================================================ */

/* ── NAV: hamburger toggle ── */
const hamburger = document.getElementById('navHamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('#navLinks a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ── NAV: scroll state ── */
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 30) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });

/* ── NAV: active link highlight on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navAs    = document.querySelectorAll('.nav-links a[href^="#"]');

function updateActiveNav() {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 140) {
      current = s.id;
    }
  });
  navAs.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) {
      a.classList.add('active');
    }
  });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });

/* ── SCROLL FADE-UP ── */
const fadeEls = document.querySelectorAll('.fade-up');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      fadeObserver.unobserve(e.target);
    }
  });
}, {
  threshold: 0.08,
  rootMargin: '0px 0px -48px 0px'
});

fadeEls.forEach(el => fadeObserver.observe(el));

// Trigger hero elements immediately on load
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelectorAll('#hero .fade-up').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 120);
    });
  }, 80);
});

/* ── CONTACT FORM ── */
function handleContactForm() {
  const nameEl    = document.getElementById('contactName');
  const emailEl   = document.getElementById('contactEmail');
  const messageEl = document.getElementById('contactMessage');
  const successEl = document.getElementById('contactSuccess');
  const btn       = document.getElementById('contactBtn');

  const name    = nameEl.value.trim();
  const email   = emailEl.value.trim();
  const message = messageEl.value.trim();

  // Simple validation
  let valid = true;
  [nameEl, emailEl, messageEl].forEach(el => {
    el.style.borderColor = '';
    el.style.boxShadow   = '';
  });

  if (!name) {
    nameEl.style.borderColor = '#EF4444';
    nameEl.style.boxShadow   = '0 0 0 3px rgba(239,68,68,0.12)';
    valid = false;
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailEl.style.borderColor = '#EF4444';
    emailEl.style.boxShadow   = '0 0 0 3px rgba(239,68,68,0.12)';
    valid = false;
  }
  if (!message) {
    messageEl.style.borderColor = '#EF4444';
    messageEl.style.boxShadow   = '0 0 0 3px rgba(239,68,68,0.12)';
    valid = false;
  }
  if (!valid) return;

  // Build mailto
  const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
  const body    = encodeURIComponent(
    `Hi Munna,\n\n${message}\n\nBest regards,\n${name}\n${email}`
  );
  window.location.href = `mailto:iam.ajmunna@gmail.com?subject=${subject}&body=${body}`;

  // Show success state
  btn.textContent      = 'Message Sent ✓';
  btn.style.background = '#16a34a';
  successEl.style.display = 'block';

  // Reset after delay
  setTimeout(() => {
    nameEl.value    = '';
    emailEl.value   = '';
    messageEl.value = '';
    btn.textContent      = 'Send Message →';
    btn.style.background = '';
    successEl.style.display = 'none';
  }, 5000);
}

/* ── BACK TO TOP ── */
const backTop = document.getElementById('backToTop');
if (backTop) {
  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── SKILL CARD: stagger on view ── */
const skillCards = document.querySelectorAll('.skill-card');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => {
        e.target.style.opacity    = '1';
        e.target.style.transform  = 'translateY(0)';
      }, i * 60);
      skillObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

skillCards.forEach(card => {
  card.style.opacity   = '0';
  card.style.transform = 'translateY(16px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  skillObserver.observe(card);
});

/* ── STAT COUNTER ANIMATION ── */
function animateCounter(el, target, suffix = '') {
  const isFloat    = String(target).includes('.');
  const decimals   = isFloat ? String(target).split('.')[1].length : 0;
  const duration   = 1200;
  const startTime  = performance.now();

  function step(now) {
    const elapsed  = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current  = eased * parseFloat(target);

    el.textContent = isFloat
      ? current.toFixed(decimals) + suffix
      : Math.round(current) + suffix;

    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const statEls = document.querySelectorAll('.hero-stat-value');
      const values  = [
        { val: '3.75', suffix: '' },
        { val: '2',    suffix: '×' },
        { val: '99.8', suffix: '%' }
      ];
      statEls.forEach((el, i) => {
        animateCounter(el, values[i].val, values[i].suffix);
      });
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.8 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

/* ── SMOOTH SCROLL for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── CURSOR GLOW (desktop only) ── */
if (window.matchMedia('(pointer: fine)').matches) {
  const glow = document.createElement('div');
  glow.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    background: radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    transition: opacity 0.3s;
    will-change: left, top;
  `;
  document.body.appendChild(glow);

  let mouseX = 0, mouseY = 0;
  let glowX  = 0, glowY  = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.left = glowX + 'px';
    glow.style.top  = glowY + 'px';
    requestAnimationFrame(animateGlow);
  }
  animateGlow();

  document.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { glow.style.opacity = '1'; });
}

/* ── PROJECTS CATEGORY FILTERING ── */
const categoryButtons = document.querySelectorAll('.category-btn');
const projectCards = document.querySelectorAll('#projects .project-card');

categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('active')) return;

    // Toggle active classes on tab buttons
    categoryButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const selectedCategory = btn.getAttribute('data-category');

    projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const shouldShow = selectedCategory === 'all' || cardCategory === selectedCategory;

      if (shouldShow) {
        card.classList.remove('card-hidden');
      } else {
        card.classList.add('card-hidden');
      }
    });
  });
});
