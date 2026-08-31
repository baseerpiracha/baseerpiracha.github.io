/* =========================================================
   BASEER AHMAD PIRACHA — PORTFOLIO SCRIPT
   Vanilla JS: mobile nav toggle, active-section highlighting,
   fade-in on scroll, dynamic year, sticky nav shadow.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Dynamic copyright year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close mobile menu after clicking a link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Active section highlighting via IntersectionObserver ---------- */
  const sections = document.querySelectorAll('main section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const setActiveLink = (id) => {
    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === id);
    });
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

  sections.forEach(section => sectionObserver.observe(section));

  /* ---------- Fade-in on scroll ---------- */
  const fadeEls = document.querySelectorAll('.fade-in');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  fadeEls.forEach(el => fadeObserver.observe(el));

  /* ---------- Sticky nav subtle shadow on scroll ---------- */
  const siteNav = document.getElementById('site-nav');

  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (siteNav) {
      siteNav.style.boxShadow = current > 10
        ? '0 8px 24px -12px rgba(0,0,0,0.35)'
        : 'none';
    }
  }, { passive: true });

});
