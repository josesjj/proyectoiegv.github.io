// Animación de entrada global para toda la página


document.addEventListener('DOMContentLoaded', function () {
  // Agrega la clase de animación al body
  document.body.classList.add('animate-fadeInUp');

  // Elimina la animación después de 1s para que no afecte otras transiciones
  setTimeout(() => {
    document.body.classList.remove('animate-fadeInUp');
  }, 1000);
});
