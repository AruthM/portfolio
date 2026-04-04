// =====================
// NAV ACTIVE ON SCROLL
// =====================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 300;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });

  // Scroll-to-top button visibility
  const scrollTop = document.getElementById('scrollTop');
  if (window.scrollY > 300) {
    scrollTop.classList.add('visible');
  } else {
    scrollTop.classList.remove('visible');
  }
});

// =====================
// HAMBURGER MENU
// =====================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  // Prevent body scroll when menu is open
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

// Close menu when a mobile link is clicked
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// =====================
// SCROLL TO TOP
// =====================
document.getElementById('scrollTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
