document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');

    if (navMenu.classList.contains('show')) {
      hamburger.textContent = '✖'; // Icono cerrar
    } else {
      hamburger.textContent = '☰'; // Icono hamburguesa
    }
  });
});
