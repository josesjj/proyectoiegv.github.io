// Script para menú hamburguesa responsive

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('menu-btn');
  const menuMobile = document.getElementById('menu-mobile');
  let open = false;

  btn.addEventListener('click', function () {
    open = !open;
    if (open) {
      menuMobile.classList.remove('hidden');
      btn.classList.add('open');
    } else {
      menuMobile.classList.add('hidden');
      btn.classList.remove('open');
    }
  });

  // Cierra el menú al hacer click en un enlace
  menuMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuMobile.classList.add('hidden');
      btn.classList.remove('open');
      open = false;
    });
  });

  // Cierra el menú si se redimensiona a escritorio
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      menuMobile.classList.add('hidden');
      btn.classList.remove('open');
      open = false;
    }
  });
});
