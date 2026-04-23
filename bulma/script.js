// =============================================
// ANO NO RODAPÉ
// =============================================
document.getElementById('year').textContent = new Date().getFullYear();

// =============================================
// NAVBAR BURGER (menu mobile — Bulma)
// =============================================
var burger = document.querySelector('.navbar-burger');
var menu   = document.getElementById('navMenu');

if (burger && menu) {
  burger.addEventListener('click', function () {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });
}

// =============================================
// TEMA CLARO / ESCURO
// Usa data-theme no <html> + classes CSS
// =============================================
var root  = document.documentElement;
var btn   = document.getElementById('themeToggle');
var icon  = document.getElementById('themeIcon');
var label = document.getElementById('themeLabel');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  if (theme === 'dark') {
    icon.className    = 'fa-solid fa-sun';
    label.textContent = 'Claro';
  } else {
    icon.className    = 'fa-solid fa-moon';
    label.textContent = 'Escuro';
  }
}

// Carrega preferência salva
var savedTheme = localStorage.getItem('theme');
applyTheme(savedTheme ? savedTheme : 'light');

// Evento de clique no botão
if (btn) {
  btn.addEventListener('click', function () {
    var current = root.getAttribute('data-theme');
    applyTheme(current === 'light' ? 'dark' : 'light');
  });
}
