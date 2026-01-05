const reveals = document.querySelectorAll('.reveal');
const staggerItems = document.querySelectorAll('[data-stagger]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('animate-fadeUp');
      void entry.target.offsetWidth; // restart animation
      entry.target.classList.add('animate-fadeUp');
    } else {
      entry.target.classList.remove('animate-fadeUp');
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

// stagger timing
staggerItems.forEach((el, index) => {
  el.style.animationDelay = `${index * 0.12}s`;
});
