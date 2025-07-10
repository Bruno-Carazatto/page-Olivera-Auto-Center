// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.menu');
  const overlay = document.querySelector('.menu-overlay');
  const body = document.body;
  const menuLinks = document.querySelectorAll('.menu a');

  /**
   * Alterna a visibilidade do menu mobile
   */
  function toggleMenu() {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('no-scroll');
  }

  /**
   * Fecha o menu mobile se estiver ativo
   */
  function closeMenu() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('no-scroll');
  }

  // Abertura e fechamento do menu via botão
  if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });
  }

  // Fecha o menu ao clicar no overlay
  if (overlay) {
    overlay.addEventListener('click', () => {
      closeMenu();
    });
  }

  // Fecha o menu ao clicar em qualquer link do menu
  if (menuLinks.length > 0) {
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (menu.classList.contains('active')) {
          closeMenu();
        }
      });
    });
  }

  // Fecha o menu se redimensionar para desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 992 && menu.classList.contains('active')) {
      closeMenu();
    }
  });
});
