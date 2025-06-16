document.addEventListener("DOMContentLoaded", () => {
    // ANIMACIÓN DE ENTRADA FADE-IN
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.2}s`;
      el.classList.add("animated");
    });
  
    // BOTÓN VOLVER ARRIBA
    const backToTop = document.createElement("div");
    backToTop.className = "back-to-top";
    backToTop.textContent = "↑";
    document.body.appendChild(backToTop);
  
    window.addEventListener("scroll", () => {
      backToTop.style.display = window.scrollY > 400 ? "block" : "none";
    });
  
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // NAVEGACIÓN SUAVE
    document.querySelectorAll('a[href^=\"#\"]').forEach(link => {
      link.addEventListener("click", e => {
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // REVELADO POR SCROLL
    const revealOnScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.85) {
          el.classList.add("fade-in");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  
    // MENÚ HAMBURGUESA RESPONSIVE (si deseas implementarlo)
    const navToggle = document.createElement("div");
    navToggle.className = "nav-toggle";
    navToggle.innerHTML = "<span></span><span></span><span></span>";
    document.querySelector("nav").prepend(navToggle);
  
    navToggle.addEventListener("click", () => {
      document.querySelector(".nav-list").classList.toggle("nav-open");
      navToggle.classList.toggle("open");
    });
  
    // EFECTO HOVER EN BOTONES (brillo dorado)
    document.querySelectorAll(".btn, .nav-list a").forEach(el => {
      el.addEventListener("mousemove", e => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty("--x", `${x}px`);
        el.style.setProperty("--y", `${y}px`);
      });
    });
  });
  