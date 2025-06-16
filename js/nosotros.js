// ===============================
//       JS - NOSOTROS PAGE
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    const teamMembers = document.querySelectorAll(".team-member");
  
    // Observador para activar animación si no queremos usar delay fijo
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });
  
    teamMembers.forEach(member => observer.observe(member));
  
    // Podrías agregar interacciones adicionales aquí, como tooltips o efectos al hacer clic
  });
  