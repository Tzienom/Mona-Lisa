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

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  // alert("Pardon, but this parchment is sacred and not to be unsealed.");
});

document.addEventListener("keydown", function (e) {
  // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S, Ctrl+C, Ctrl+P, Ctrl+A
  if (
    e.keyCode === 123 || // F12
    (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || // Ctrl+Shift+I or J
    (e.ctrlKey &&
      (e.keyCode === 85 ||
        e.keyCode === 83 ||
        e.keyCode === 67 ||
        e.keyCode === 80 ||
        e.keyCode === 65)) // Ctrl+U, S, C, P, A
  ) {
    e.preventDefault();
  }
});
