document.addEventListener("DOMContentLoaded", () => {
    // =============================
    // ANIMACIÓN DE ENTRADA POR SCROLL
    // =============================
    const items = document.querySelectorAll(".portfolio-item");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });
  
    items.forEach(item => observer.observe(item));
  
    // =============================
    // ZOOM INTERACTIVO EN IMÁGENES (SE HACE EN CSS)
    // =============================
    // Ya se aplica con :hover desde el CSS
  
    // =============================
    // GALERÍA FULLSCREEN AL HACER CLIC
    // =============================
    const overlay = document.createElement('div');
    overlay.className = 'gallery-overlay';
    overlay.innerHTML = `
      <span class="close-btn">&times;</span>
      <img src="" alt="Vista Ampliada">
    `;
    document.body.appendChild(overlay);
  
    const overlayImage = overlay.querySelector('img');
    const closeBtn = overlay.querySelector('.close-btn');
  
    document.querySelectorAll('.portfolio-item img').forEach(img => {
      img.addEventListener('click', () => {
        overlayImage.src = img.src;
        overlay.classList.add('active');
      });
    });
  
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
    });
  
    // También cerrar si se hace clic fuera de la imagen
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });
  