// FAQ interactivo

document.addEventListener('DOMContentLoaded', function() {
  const questions = document.querySelectorAll('.faq-question');
  questions.forEach(btn => {
    btn.addEventListener('click', function() {
      const answer = this.parentElement.querySelector('.faq-answer');
      const open = !answer.classList.contains('hidden');
      document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
      document.querySelectorAll('.faq-question svg').forEach(svg => svg.classList.remove('rotate-180'));
      if (!open) {
        answer.classList.remove('hidden');
        this.querySelector('svg').classList.add('rotate-180');
      }
    });
  });
});
