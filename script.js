// --- STICKY HEADER SCRIPT ---
window.addEventListener("scroll", function() {
  const header = document.querySelector(".main-header");
  const titleSection = document.querySelector(".site-title-section");

  // Height of logo/title section
  const triggerPoint = titleSection.offsetHeight;

  if (window.scrollY > triggerPoint) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});


// --- SCROLL ANIMATION SCRIPT ---
document.addEventListener("DOMContentLoaded", function() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  if (!animatedElements.length) {
    return;
  }

  // Use the highly performant Intersection Observer API
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // When the element is in view, add the 'is-visible' class
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Unobserve the element after it has been animated to save resources
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  // Observe each animated element
  animatedElements.forEach(element => {
    observer.observe(element);
  });
});
