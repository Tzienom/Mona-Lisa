window.addEventListener("load", () => {
  const delayBetweenElements = 1000;
  const typingSpeed1 = 300;
  const typingSpeed2 = 70;

  const typingQueue = [
    {
      selector: ".title",
      text: "Mona Lisa",
      speed: typingSpeed1,
    },
    {
      selector: ".subtitle",
      text: "My Dearest Chinyere,",
      speed: typingSpeed1,
    },
    {
      selector: ".paragraph-1",
      text: `My thoughts often linger upon the very first moment I was attended by your portrait—though it remained unmoving, it was poised with essence of life itself. The gaze with which you regarded me possessed the power to ensnare, an affliction that could only be tempered by an enchantress. In the wake of that moment, a light burden weighed upon the cart of my heart, spirited away long before my mind could fathom the path in which it wandered—you had become to me what Mona Lisa is to the rest of the world—an artistic excellence, wrought from the hand of a Master intent on sculpting his finest work, but you, my dear, remain unmarred by the hands of man.`,
      speed: typingSpeed2,
    },
    {
      selector: ".paragraph-2",
      text: `The affections I bear for you are not born of fleeting sentiments, but genuine care and respect. Our first encounter was not of a fiery exchange, but like a gentle breeze that breathed life into the withered bower of my heart. The weeks following our initial correspondence brought a tempest of longing that threatened ruin to the seat of my reason—thoughts of you became the favoured object to which my mind would go adrift. My heart, once steady and serene in its rhythm, now dances to the harmony in the tenor of your speech, yet my mind sought not to be in consonance with this rhythm, but to strike instead a dissonant chord—but such passions as burn within me are too greatly aflame to be subdued—a testament to the truth that I am unable to love you gently, for it not in me to love by halves—I shall love you completely and madly!`,
      speed: typingSpeed2,
    },
    {
      selector: ".paragraph-3",
      text: `You, my dear girl, are an epitome of resplendent wonder, and I find myself quite undone in your society. To behold your likeness is to be short of breath as one who has gazed upon the face of the angel, Gabriel himself. When the day shall come that we would saunter in a field awash with blossoms of every hue, I shall pluck you a primrose—not for its beauty, though it is fair, neither for its rarity, although it is cherished—but it is the first bloom of spring and its beauty remains the longest.`,
      speed: typingSpeed2,
    },
    {
      selector: ".paragraph-4",
      text: `I must beg your gracious leave, my dear Chinyere, to address your parents for a formal acknowledgement of my intent to ask the hand of their precious daughter, that I may love and cherish her as no other could, until my last breath.`,
      speed: typingSpeed2,
    },
    {
      selector: ".paragraph-5",
      text: `I intended to write you words of poetry, but the thoughts of you took control of my hand, and I ceased to be in command of my pen, thus laying myself bare to the tide of my emotions.`,
      speed: typingSpeed2,
    },
    {
      selector: ".signature-1",
      text: `With undying love and respect,`,
      speed: typingSpeed2,
    },
    {
      selector: ".signature-2",
      text: `— Gabriel`,
      speed: typingSpeed2,
    },
  ];

  function typeText({ selector, text, speed }, onComplete) {
    const element = document.querySelector(selector);
    if (!element) return;

    let i = 0;
    element.innerHTML = "";

    function typeChar() {
      if (i < text.length) {
        const char = text[i];
        element.innerHTML += char;
        i++;

        let delay = speed;

        switch (char) {
          case ",":
            delay = 200;
            break;
          case ";":
            delay = 275;
            break;
          case ":":
            delay = 250;
            break;
          case ".":
            delay = 400;
            break;
          case "—":
            delay = 300;
            break;
          case "!":
          case "?":
            delay = 350;
            break;
          case "\n":
            delay = 500;
            break;
        }

        if (text.slice(i - 3, i) === "...") delay = 500;

        setTimeout(typeChar, delay);
      } else if (typeof onComplete === "function") {
        setTimeout(onComplete, delayBetweenElements);
      }
    }

    typeChar();
  }

  function animateSequence(index = 0) {
    if (index >= typingQueue.length) return;
    typeText(typingQueue[index], () => animateSequence(index + 1));
  }

  function revealMonaLisa() {
    const musings = document.getElementById("musings-section");
    const monaSection = document.getElementById("mona-lisa-section");

    musings.classList.add("fade-out");

    setTimeout(() => {
      musings.style.display = "none";
      monaSection.classList.remove("hidden");
      monaSection.style.opacity = "1";

      animateSequence();

      const audio = document.querySelector("#mona-audio");

      audio.muted = false;
      const playPromise = audio.play();

      // if (playPromise != undefined) {
      //   playPromise
      //     .then(() => console.log("Audio playing."))
      //     .catch((err) => console.log("Audio play failed:", err));
      // }
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Audio is playing.");
          })
          .catch((error) => {
            console.error("Cannot play audio: ", error);
          });
      }
    }, 1500);
  }

  document.getElementById("yes-btn").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    revealMonaLisa();
  });

  document.getElementById("no-btn").addEventListener("click", () => {
    const notification = document.getElementById("no-notification");
    notification.style.opacity = "1";

    setTimeout(() => {
      notification.style.opacity = "0";
    }, 4000);
  });
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
