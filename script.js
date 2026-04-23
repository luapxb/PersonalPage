// =============================================
// TEMA CLARO / ESCURO
// =============================================

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';

  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeButton(newTheme);
}

function updateThemeButton(theme) {
  const icon  = document.getElementById('themeIcon');
  const label = document.getElementById('themeLabel');
  if (!icon || !label) return;

  if (theme === 'dark') {
    icon.className = 'bi bi-sun';
    label.textContent = 'Claro';
  } else {
    icon.className = 'bi bi-moon-stars';
    label.textContent = 'Escuro';
  }
}

// Aplica o tema salvo assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function () {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeButton(saved);

  // Liga o botão de tema
  const btn = document.getElementById('themeToggle');
  if (btn) btn.addEventListener('click', toggleTheme);

  // =============================================
  // NAVBAR — some ao rolar para baixo, volta ao rolar para cima
  // =============================================
  const nav = document.getElementById('mainNav');
  let lastScroll = 0;

  window.addEventListener('scroll', function () {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 80) {
      // Rolando para baixo → esconde
      nav.classList.add('hidden');
    } else {
      // Rolando para cima → mostra
      nav.classList.remove('hidden');
    }

    lastScroll = currentScroll;
  });

  // =============================================
  // ANIMAÇÕES AO ROLAR A PÁGINA
  // =============================================
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          setTimeout(function () {
            entry.target.classList.add('visible');
          }, i * 120);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.fade-in').forEach(function (el) {
    observer.observe(el);
  });
});
