// =============================================
// MENU BURGER (Bulma)
// =============================================
var burger = document.getElementById('burgerBtn');
var navMenu = document.getElementById('navMenu');

if (burger) {
  burger.addEventListener('click', function () {
    burger.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
  });
}

// =============================================
// ANO NO RODAPÉ
// =============================================
var yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// =============================================
// TEMA CLARO / ESCURO
// Usa data-theme customizado (Bulma não tem data-bs-theme nativo)
// =============================================
var root  = document.documentElement;
var btn   = document.getElementById('themeToggle');
var icon  = document.getElementById('themeIcon');
var label = document.getElementById('themeLabel');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  if (theme === 'dark') {
    if (icon)  icon.className  = 'fa-solid fa-sun';
    if (label) label.textContent = 'Claro';
  } else {
    if (icon)  icon.className  = 'fa-solid fa-moon';
    if (label) label.textContent = 'Escuro';
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
