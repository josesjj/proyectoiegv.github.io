// FAQ interactivo

document.addEventListener('DOMContentLoaded', function() {
  const questions = document.querySelectorAll('.faq-question');
  questions.forEach(btn => {
    btn.addEventListener('click', function() {
    
      let answer = btn.nextElementSibling;
      while (answer && !answer.classList.contains('faq-answer')) {
        answer = answer.nextElementSibling;
      }
      if (!answer) return;
      const svg = btn.querySelector('svg');
      answer.classList.toggle('hidden');
      if (!answer.classList.contains('hidden')) {
        svg.classList.add('rotate-180');
      } else {
        svg.classList.remove('rotate-180');
      }
    });
  });
});
