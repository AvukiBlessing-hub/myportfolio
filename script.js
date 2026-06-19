// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
function closeMobile() { mobileMenu.classList.remove('open'); }

// Scroll reveal
const reveals = document.querySelectorAll('.reveal, .hero-left, .hero-right, .about-grid, .expertise-card, .contact-wrap');
reveals.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
reveals.forEach(el => io.observe(el));

// Nav active link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) cur = s.id; });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--navy)' : '';
    a.style.fontWeight = a.getAttribute('href') === '#' + cur ? '500' : '';
  });
}, { passive: true });
