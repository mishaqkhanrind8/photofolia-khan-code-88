AOS.init({
  duration: 1000,
  offset: 80,
  easing: 'ease-out-cubic',
  mirror: true,
  once: false
});

const style = document.createElement("style");
style.textContent = `
  [data-aos="fade-up"] {
    transform: translateY(20px); /* halki si upar movement */
    opacity: 0;
    transition-property: transform, opacity;
  }
  [data-aos="fade-up"].aos-animate {
    transform: translateY(0);
    opacity: 1;
  }
`;
document.head.appendChild(style);
