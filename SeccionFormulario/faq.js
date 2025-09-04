// FAQ interactivo

document.addEventListener('DOMContentLoaded', function() {
  const questions = document.querySelectorAll('.faq-question');
  questions.forEach(btn => {
    btn.addEventListener('click', function() {
      const answer = this.parentElement.querySelector('.faq-answer');
      const svg = this.querySelector('svg');
      // Alterna solo la respuesta de la pregunta actual
      answer.classList.toggle('hidden');
      // Animar la flecha solo para la pregunta actual
      if (!answer.classList.contains('hidden')) {
        svg.classList.add('rotate-180');
      } else {
        svg.classList.remove('rotate-180');
      }
    });
  });
});
