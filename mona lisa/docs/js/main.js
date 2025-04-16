document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animated-text");
  elements.forEach((el, index) => {
    const text = el.textContent;
    el.textContent = "";
    [...text].forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.animationDelay = `${index * 1.5 + i * 0.05}s`;
      el.appendChild(span);
    });
  });
});
