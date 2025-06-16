document.addEventListener("DOMContentLoaded", () => {
    // Activar animación de entrada por scroll
    const cards = document.querySelectorAll(".service-card");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
  
    cards.forEach(card => observer.observe(card));
  
    // Hover efecto brillo dorado (opcional)
    cards.forEach(card => {
      card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    });
  });
  