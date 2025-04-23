
document.querySelector('.notification-icon').addEventListener('click', function () {
    alert('You have new notifications!');
});

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

    const buttons = document.querySelectorAll('.sec3 button');
    const texts = document.querySelectorAll('.sec3 p');
  
    buttons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        texts.forEach((p, i) => {
          p.style.display = i === index ? 'block' : 'none';
        });
  
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  
    // Initialize default active state
    texts.forEach((p, i) => {
      p.style.display = i === 0 ? 'block' : 'none';
    });
    buttons[0].classList.add('active');
  
  

    