// ===============================
//       CONTACTO - JS            
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const message = form.message.value.trim();
  
      if (!name || !email || !phone || !message) {
        alert("Por favor, completa todos los campos del formulario.");
        form.scrollIntoView({ behavior: "smooth" });
        return;
      }
  
      // Simulación de envío exitoso (puedes integrar con backend real)
      alert("Gracias por contactarnos. Te responderemos pronto ✨");
      form.reset();
      form.scrollIntoView({ behavior: "smooth" });
    });
  });