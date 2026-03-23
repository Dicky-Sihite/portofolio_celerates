/* ================================================================
   SCRIPT.JS — Dicky Sihite Portfolio Website
   ================================================================ */



/* ----------------------------------------------------------------
   2. SCROLL REVEAL
---------------------------------------------------------------- */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

revealElements.forEach((el) => revealObserver.observe(el));

/* ----------------------------------------------------------------
   3. SKILL BAR ANIMATION
---------------------------------------------------------------- */
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach((fill) => {
        const targetWidth = fill.dataset.width;
        fill.style.transform = `scaleX(${targetWidth})`;
        fill.classList.add('animate');
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-grid').forEach((grid) => {
  skillObserver.observe(grid);
});

/* ----------------------------------------------------------------
   4. ACTIVE NAV LINK ON SCROLL
---------------------------------------------------------------- */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a:not(.nav-cta)');

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 120) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === '#' + currentSection;
    link.style.color = isActive ? 'var(--text)' : '';
  });
}, { passive: true });