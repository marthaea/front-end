
  document.querySelector('.notification-icon').addEventListener('click', function () {
      alert('You have new notifications!');
  });


  const testimonials = document.querySelectorAll('.section-divs > div');
  let currentIndex = 0;

  function showTestimonial(index) {
      testimonials.forEach((t, i) => {
          t.style.display = i === index ? 'block' : 'none';
      });
  }

  showTestimonial(currentIndex);

  document.querySelectorAll('.arrow-btn')[0].addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
  });

  document.querySelectorAll('.arrow-btn')[1].addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
  });


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
  });

