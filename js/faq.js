// ===============================
//          FAQ - JS              
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach(item => {
      const question = item.querySelector(".faq-question");
      question.addEventListener("click", () => {
        // Cierra todos los otros items
        faqItems.forEach(i => {
          if (i !== item) i.classList.remove("active");
        });
        // Toggle activo
        item.classList.toggle("active");
      });
    });
  });
  