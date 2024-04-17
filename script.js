document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.getElementById('hamburger');
  var menu = document.getElementById('menu');
  var close = document.getElementById('close');

  // Toggle menu on hamburger click
  hamburger.addEventListener('click', function() {
      menu.classList.add('open');
  });

  // Close menu on 'X' click
  close.addEventListener('click', function() {
      menu.classList.remove('open');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var faqs = document.querySelectorAll('.faq-question');

  faqs.forEach(function(faq) {
      faq.addEventListener('click', function() {
          this.classList.toggle('active');
          var answer = this.querySelector('p');
          if (answer.style.display === 'block') {
              answer.style.display = 'none';
          } else {
              answer.style.display = 'block';
          }
      });
  });
});