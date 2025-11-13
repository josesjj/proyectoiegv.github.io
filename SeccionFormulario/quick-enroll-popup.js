// Quick Enrollment Popup System
// This script handles the popup modal for quick course enrollment

// Course data with detailed information
const coursesData = {
  'cocina-internacional': {
    title: 'Chef en Cocina Internacional',
    subtitle: 'Domina las técnicas culinarias de todo el mundo',
    image: '../Imagenes/imagen02.jpg',
    duration: '24 meses',
    description: 'Sumérgete en el fascinante mundo de la gastronomía internacional. Aprende técnicas francesas, italianas, españolas, asiáticas y latinoamericanas con chefs experimentados. Esta carrera te prepara para trabajar en los mejores restaurantes o iniciar tu propio negocio.',
    benefits: [
      '✓ Certificación avalada por UNET y Ministerio de Educación',
      '✓ Prácticas en restaurantes reales',
      '✓ Simulación de ambiente profesional',
      '✓ Instructores con experiencia internacional',
      '✓ Equipamiento de última generación',
      '✓ Networking con profesionales del sector'
    ],
    features: [
      { icon: '📜', text: 'Certificación Oficial' },
      { icon: '👨‍🍳', text: 'Chefs Profesionales' },
      { icon: '🌍', text: 'Cocina Internacional' },
      { icon: '🔥', text: 'Prácticas Intensivas' },
      { icon: '🏆', text: '15 Años de Experiencia' },
      { icon: '🎓', text: '+1200 Egresados' }
    ],
    faqs: [
      {
        question: '¿Necesito experiencia previa en cocina?',
        answer: 'No, nuestro programa está diseñado tanto para principiantes como para personas con experiencia que deseen profesionalizarse.'
      },
      {
        question: '¿Qué tipo de certificación recibo?',
        answer: 'Recibes un título de Chef en Cocina Internacional avalado por la UNET y el Ministerio de Educación de Venezuela.'
      },
      {
        question: '¿Incluye ingredientes y materiales?',
        answer: 'Sí, todos los ingredientes y materiales de cocina necesarios para las prácticas están incluidos en la mensualidad.'
      },
      {
        question: '¿Hay oportunidades laborales al graduarse?',
        answer: 'Sí, tenemos convenios con restaurantes y hoteles de la región, además de asesoría para emprendimiento.'
      }
    ]
  },
  'panaderia-pasteleria': {
    title: 'Chef Internacional en Panadería, Pastelería y Repostería',
    subtitle: 'El arte de crear delicias que enamoran',
    image: '../Imagenes/imagen01.jpg',
    duration: '21 meses',
    description: 'Conviértete en un maestro de la panadería y la pastelería. Aprende desde las técnicas básicas hasta las más avanzadas en decoración, masas, cremas y chocolatería. Desarrolla tu creatividad y técnica para crear productos de alta calidad.',
    benefits: [
      '✓ Certificación oficial reconocida',
      '✓ Técnicas de panadería artesanal e industrial',
      '✓ Decoración profesional con fondant y royal icing',
      '✓ Chocolatería y bombonería',
      '✓ Manejo de costos y emprendimiento',
      '✓ Prácticas en panaderías y pastelerías'
    ],
    features: [
      { icon: '🎂', text: 'Pastelería Avanzada' },
      { icon: '🥖', text: 'Panadería Artesanal' },
      { icon: '🍫', text: 'Chocolatería' },
      { icon: '🎨', text: 'Decoración Profesional' },
      { icon: '💼', text: 'Emprendimiento' },
      { icon: '⭐', text: 'Técnicas Modernas' }
    ],
    faqs: [
      {
        question: '¿Aprenderé técnicas modernas de decoración?',
        answer: 'Sí, incluimos decoración con fondant, royal icing, técnicas de pintura en tortas y las últimas tendencias en pastelería.'
      },
      {
        question: '¿Se incluye chocolatería?',
        answer: 'Sí, tenemos un módulo completo dedicado a chocolatería y bombonería artesanal.'
      },
      {
        question: '¿Puedo especializarme en panadería sin gluten?',
        answer: 'Durante el curso aprendemos técnicas de panadería alternativa, incluyendo productos sin gluten y veganos.'
      },
      {
        question: '¿Cómo son las prácticas?',
        answer: 'Las prácticas son intensivas, trabajando con recetas reales y simulando un ambiente de producción profesional.'
      }
    ]
  }
};

// DOM Elements
let popup, closeBtn, popupContent, enrollForm;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements
  popup = document.getElementById('quick-enroll-popup');
  closeBtn = document.getElementById('close-popup');
  popupContent = document.getElementById('popup-content');
  enrollForm = document.getElementById('quick-enroll-form');
  
  // Add event listeners to all quick enroll buttons
  const enrollButtons = document.querySelectorAll('.quick-enroll-btn');
  enrollButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const courseId = this.getAttribute('data-course');
      openPopup(courseId);
    });
  });
  
  // Close popup events
  if (closeBtn) {
    closeBtn.addEventListener('click', closePopup);
  }
  
  // Close on overlay click
  if (popup) {
    popup.addEventListener('click', function(e) {
      if (e.target === popup) {
        closePopup();
      }
    });
  }
  
  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && popup && !popup.classList.contains('hidden')) {
      closePopup();
    }
  });
  
  // Handle form submission
  if (enrollForm) {
    enrollForm.addEventListener('submit', handleFormSubmit);
  }
});

// Open popup with course data
function openPopup(courseId) {
  const course = coursesData[courseId];
  if (!course) return;
  
  // Build popup content
  const content = `
    <div class="animate-fadeInUp">
      <!-- Course Image -->
      <div class="mb-6">
        <img src="${course.image}" alt="${course.title}" class="w-full h-64 object-cover rounded-2xl shadow-lg" />
      </div>
      
      <!-- Course Title and Subtitle -->
      <h2 class="text-3xl md:text-4xl font-extrabold text-orange-600 mb-2">${course.title}</h2>
      <p class="text-lg text-orange-500 font-semibold mb-4">${course.subtitle}</p>
      
      <!-- Duration Badge -->
      <div class="inline-block bg-orange-100 px-4 py-2 rounded-full mb-6">
        <span class="text-orange-700 font-bold">⏱️ Duración: ${course.duration}</span>
      </div>
      
      <!-- Description -->
      <div class="mb-6">
        <h3 class="text-xl font-bold text-orange-600 mb-2">Descripción</h3>
        <p class="text-gray-700 leading-relaxed">${course.description}</p>
      </div>
      
      <!-- Benefits -->
      <div class="mb-6">
        <h3 class="text-xl font-bold text-orange-600 mb-3">Beneficios</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
          ${course.benefits.map(benefit => `
            <div class="flex items-start gap-2">
              <span class="text-orange-500 text-sm">${benefit}</span>
            </div>
          `).join('')}
        </div>
      </div>
      
      <!-- Features Icons -->
      <div class="mb-6">
        <h3 class="text-xl font-bold text-orange-600 mb-3">Características</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          ${course.features.map(feature => `
            <div class="bg-orange-50 rounded-xl p-4 text-center border-2 border-orange-200 hover:border-orange-400 transition-all">
              <div class="text-3xl mb-2">${feature.icon}</div>
              <div class="text-sm font-semibold text-orange-700">${feature.text}</div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <!-- FAQs -->
      <div class="mb-4">
        <h3 class="text-xl font-bold text-orange-600 mb-3">Preguntas Frecuentes</h3>
        <div class="space-y-3">
          ${course.faqs.map((faq, index) => `
            <div class="faq-item-popup bg-orange-50 rounded-xl shadow p-4 cursor-pointer border-l-4 border-orange-400 hover:bg-orange-100 transition-all" data-faq-index="${index}">
              <div class="faq-question-popup flex items-center justify-between">
                <span class="font-semibold text-orange-700 text-sm md:text-base">${faq.question}</span>
                <span class="faq-arrow-popup text-orange-500 text-xl font-bold">+</span>
              </div>
              <div class="faq-answer-popup text-gray-700 text-sm mt-2 hidden">${faq.answer}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  
  // Insert content
  popupContent.innerHTML = content;
  
  // Show popup
  popup.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Prevent background scroll
  
  // Add FAQ toggle functionality
  setTimeout(() => {
    const faqItems = popupContent.querySelectorAll('.faq-item-popup');
    faqItems.forEach(item => {
      item.addEventListener('click', function() {
        const answer = item.querySelector('.faq-answer-popup');
        const arrow = item.querySelector('.faq-arrow-popup');
        const isOpen = !answer.classList.contains('hidden');
        
        // Close all FAQs in popup
        popupContent.querySelectorAll('.faq-answer-popup').forEach(a => a.classList.add('hidden'));
        popupContent.querySelectorAll('.faq-arrow-popup').forEach(ar => ar.textContent = '+');
        
        // Open selected if it was closed
        if (!isOpen) {
          answer.classList.remove('hidden');
          arrow.textContent = '−';
        }
      });
    });
  }, 100);
  
  // Store current course ID for form submission
  enrollForm.setAttribute('data-current-course', courseId);
}

// Close popup
function closePopup() {
  popup.classList.add('hidden');
  document.body.style.overflow = ''; // Restore scroll
  
  // Clear form
  if (enrollForm) {
    enrollForm.reset();
  }
}

// Handle form submission
function handleFormSubmit(e) {
  e.preventDefault();
  
  const courseId = enrollForm.getAttribute('data-current-course');
  const course = coursesData[courseId];
  
  const formData = {
    course: course.title,
    name: document.getElementById('enroll-name').value,
    email: document.getElementById('enroll-email').value,
    phone: document.getElementById('enroll-phone').value,
    message: document.getElementById('enroll-message').value
  };
  
  console.log('Form submitted:', formData);
  
  // Show success message
  alert(`🎉 ¡Gracias por tu interés en "${course.title}"!\n\nHemos recibido tu solicitud y nos pondremos en contacto contigo pronto.\n\n📧 Email: ${formData.email}\n📱 Teléfono: ${formData.phone}`);
  
  // Close popup
  closePopup();
  
  // In a real implementation, you would send this data to a server
  // Example: fetch('/api/enrollment', { method: 'POST', body: JSON.stringify(formData) })
}

// Add CSS animation class if not already in global styles
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fadeInUp {
    animation: fadeInUp 0.4s ease-out;
  }
  
  /* Smooth scrollbar for popup content */
  #quick-enroll-popup .overflow-y-auto::-webkit-scrollbar {
    width: 8px;
  }
  
  #quick-enroll-popup .overflow-y-auto::-webkit-scrollbar-track {
    background: #fff3e0;
    border-radius: 10px;
  }
  
  #quick-enroll-popup .overflow-y-auto::-webkit-scrollbar-thumb {
    background: #fb923c;
    border-radius: 10px;
  }
  
  #quick-enroll-popup .overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: #f97316;
  }
`;
document.head.appendChild(style);
