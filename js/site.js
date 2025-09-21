
// Accordion functionality
function toggleAccordion(button) {
  let panel;
  const chevron = button.querySelector('i.fa-chevron-down');
  
  // Check if button has a data-target attribute (for service panels)
  const targetId = button.getAttribute('data-target');
  if (targetId) {
    panel = document.getElementById(targetId);
  } else {
    // Fall back to finding the next sibling (for other accordions)
    panel = button.nextElementSibling;
  }
  
  // Only toggle this specific panel
  if (panel) {
    if (panel.classList.contains('hidden')) {
      panel.classList.remove('hidden');
      if (chevron) chevron.style.transform = 'rotate(180deg)';
    } else {
      panel.classList.add('hidden');
      if (chevron) chevron.style.transform = 'rotate(0deg)';    
    }
  }
}

// Table toggle functionality
function toggleViewTable(button, tableClass, showingLabel, hidingLabel) {
  var currentLabel = button.innerHTML;
  var table = document.getElementsByClassName(tableClass)[0];
  
  if (currentLabel === hidingLabel) {
    table.classList.remove('hidden');
    button.innerHTML = showingLabel;
  } else {
    table.classList.add('hidden');
    button.innerHTML = hidingLabel;
  }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling to all links with hash
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Contact form handling (placeholder - you'll need to implement backend)
  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! I will get back to you soon. (Note: This is a placeholder - form submission needs to be implemented with a backend service)');
    });
  }
  
  // Add animation on scroll for service cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe service cards and project cards
  const cards = document.querySelectorAll('.service-card, .project-card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});

// Grid animations and interactions are handled by CSS classes