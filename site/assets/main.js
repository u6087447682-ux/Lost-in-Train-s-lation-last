/* ============================= */
/*   DARK MODE (GLOBAL)          */
/* ============================= */
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  root.classList.add('dark');
}

if (toggle) {
  toggle.textContent = root.classList.contains('dark') ? '☀️ Light' : '🌙 Dark';

  toggle.onclick = () => {
    root.classList.toggle('dark');
    localStorage.theme = root.classList.contains('dark') ? 'dark' : 'light';
    toggle.textContent = root.classList.contains('dark') ? '☀️ Light' : '🌙 Dark';
  };
}

/* ============================= */
/*   BACKGROUND MOUSE MOTION     */
/* ============================= */
const bg = document.querySelector('.editorial-bg');
if (bg) {
  let mx = 50, my = 50, tx = 50, ty = 50;

  window.addEventListener('mousemove', e => {
    tx = (e.clientX / window.innerWidth) * 100;
    ty = (e.clientY / window.innerHeight) * 100;
  });

  (function animate() {
    mx += (tx - mx) * 0.03;
    my += (ty - my) * 0.03;
    bg.style.setProperty('--mx', `${mx}%`);
    bg.style.setProperty('--my', `${my}%`);
    requestAnimationFrame(animate);
  })();
}
