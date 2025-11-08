// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll + active highlight
const links = document.querySelectorAll('.nav-link');
const sections = [...document.querySelectorAll('.section')];

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = link.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Observe sections to update active nav
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const navLink = document.querySelector(`.nav a[href="#${id}"]`);
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
      navLink?.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 });

sections.forEach(sec => navObserver.observe(sec));

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const revObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
},{ threshold: 0.08, rootMargin: '0px 0px -10% 0px'});

revealEls.forEach(el => revObs.observe(el));

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navMenu.classList.toggle('open');
  document.body.classList.toggle('menu-open');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
  });
});
