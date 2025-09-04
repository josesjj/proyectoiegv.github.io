// Script para acordeón de preguntas frecuentes (FAQ)

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', function () {
      const answer = item.querySelector('.faq-answer');
      const arrow = item.querySelector('.faq-arrow');
      const isOpen = !answer.classList.contains('hidden');
      // Cierra todos

      document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
      document.querySelectorAll('.faq-arrow').forEach(ar => ar.textContent = '+');
      // Abre el seleccionado si estaba cerrado
      
      if (!isOpen) {
        answer.classList.remove('hidden');
        arrow.textContent = '−';
      }
    });
  });
});
