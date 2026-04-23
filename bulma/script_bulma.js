// =============================================
// MENU BURGER (Bulma)
// =============================================
document.getElementById('burgerBtn').addEventListener('click', function () {
  this.classList.toggle('is-active');
  document.getElementById('navMenu').classList.toggle('is-active');
});

// =============================================
// TEMA CLARO / ESCURO
// =============================================
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';

  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('themeIcon').className = isDark ? 'bi bi-moon-stars' : 'bi bi-sun';
  document.getElementById('themeLabel').textContent = isDark ? 'Escuro' : 'Claro';

  // Salva preferência no localStorage
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

// Carrega preferência salva ao abrir a página
(function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
      document.getElementById('themeIcon').className = 'bi bi-sun';
      document.getElementById('themeLabel').textContent = 'Claro';
    }
  }
})();

// =============================================
// ANIMAÇÕES AO ROLAR A PÁGINA
// =============================================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 100);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
