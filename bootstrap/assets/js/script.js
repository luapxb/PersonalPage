// =============================================
// ANO NO RODAPÉ
// =============================================
document.getElementById('year').textContent = new Date().getFullYear();

// =============================================
// TEMA CLARO / ESCURO
// Usa o data-bs-theme nativo do Bootstrap 5.3
// =============================================
var root = document.documentElement;
var btn  = document.getElementById('themeToggle');
var icon = document.getElementById('themeIcon');
var label = document.getElementById('themeLabel');

function applyTheme(theme) {
  root.setAttribute('data-bs-theme', theme);
  localStorage.setItem('theme', theme);

  if (theme === 'dark') {
    icon.className  = 'fa-solid fa-sun';
    label.textContent = 'Claro';
  } else {
    icon.className  = 'fa-solid fa-moon';
    label.textContent = 'Escuro';
  }
}

// Carrega preferência salva
var savedTheme = localStorage.getItem('theme');
applyTheme(savedTheme ? savedTheme : 'light');

// Evento de clique no botão
if (btn) {
  btn.addEventListener('click', function () {
    var current = root.getAttribute('data-bs-theme');
    applyTheme(current === 'light' ? 'dark' : 'light');
  });
}
