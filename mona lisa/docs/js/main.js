// document.addEventListener("DOMContentLoaded", () => {
//   const elements = document.querySelectorAll(".animated-text");

//   elements.forEach((el) => {
//     el.style.opacity = "0";
//   });

//   function animateElement(el, index, onComplete) {
//     const text = el.textContent;
//     el.textContent = "";
//     el.style.opacity = "1";

//     [...text].forEach((char, i) => {
//       if (char === " ") {
//         el.appendChild(document.createTextNode(" "));
//       } else {
//         const span = document.createElement("span");
//         span.textContent = char;
//         span.style.animationDelay = `${index * 1.5 + i * 0.05}s`;
//         el.appendChild(span);
//       }
//     });

//     const totalDuration = text.length * 0.05 * 1000;
//     setTimeout(onComplete, totalDuration + 200);
//   }

//   function animateSequentially(index = 0) {
//     if (index > elements.length) return;
//     animateElement(elements[index], index, () =>
//       animateSequentially(index + 1)
//     );
//   }

//   animateSequentially();
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const elements = document.querySelectorAll(".animated-text");

//   elements.forEach((el, paragraphIndex) => {
//     const text = el.textContent.trim();
//     el.textContent = "";

//     const words = text.split(" ");

//     words.forEach((word, wordIndex) => {
//       const wordSpan = document.createElement("span");
//       wordSpan.style.display = "inline-block";
//       wordSpan.style.whiteSpace = "nowrap";
//       wordSpan.style.marginRight = "0.25rem";

//       [...word].forEach((char, charIndex) => {
//         const charSpan = document.createElement("span");
//         charSpan.textContent = char;
//         charSpan.style.display = "inline-block";
//         charSpan.style.opacity = 0;
//         charSpan.style.animation = "appear 0.1s forwards";
//         charSpan.style.animationDelay = `${
//           paragraphIndex * 2 + wordIndex * 0.3 + charIndex * 0.05
//         }s`;
//         wordSpan.appendChild(charSpan);
//       });

//       el.appendChild(wordSpan);
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animated-text");
  let totalDelay = 0;

  elements.forEach((el) => {
    const text = el.textContent.trim();
    el.textContent = "";

    const words = text.split(" ");
    const paragraphDelay = totalDelay;
    let localDelay = 0;

    words.forEach((word) => {
      const wordSpan = document.createElement("span");
      wordSpan.style.display = "inline-block";
      // wordSpan.style.whiteSpace = "pre-wrap";
      wordSpan.style.marginRight = "0.5rem";

      [...word].forEach((char) => {
        const charSpan = document.createElement("span");
        charSpan.textContent = char;
        charSpan.style.display = "inline-block";
        charSpan.style.opacity = 0;
        charSpan.style.animation = "appear 0.1s forwards";
        charSpan.style.animationDelay = `${paragraphDelay + localDelay}s`;
        localDelay += 0.05;
        wordSpan.appendChild(charSpan);
      });

      el.appendChild(wordSpan);
    });

    totalDelay += localDelay + 1.5;
  });

  const audio = document.getElementById("mona-audio");
  audio.muted = false;
  audio.volume = 0.1;
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
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
