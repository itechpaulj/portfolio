export class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el?.innerText;
    const length = Math.max(oldText?.length, newText?.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 80);
      const end = start + Math.floor(Math.random() * 80);
      this.queue.push({
        from,
        to,
        start,
        end,
      });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.58) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }

    if (this.el) {
      this.el.innerHTML = output;
    }

    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

let i = 0;

const randomizeText = () => {
  const phrase = document.querySelector(".random-word");
  if (!phrase) return;

  const compStyles = window.getComputedStyle(phrase);
  const animation = compStyles.getPropertyValue("animation");
  // eslint-disable-next-line no-unused-vars
  const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;

  const phrases = [
    "<Hello World />",
    "<Grinding/>",
    "<Focused/>",
    "<Push the limit/>",
    "<Kind/>",
    "<Fun/>",
    "<Awesome/>",
    "<Energetic/>",
  ];

  i = randomNum(i, phrases.length);
  const newPhrase = phrases[i];

  setTimeout(() => {
    phrase.textContent = newPhrase;
  }, 400); // time to allow opacity to hit 0 before changing word
};

const randomNum = (num, max) => {
  let j = Math.floor(Math.random() * max);
  return num === j ? randomNum(i, max) : j;
};

export const getAnimationTime = () => {
  const phrase = document.querySelector(".random-word");
  if (!phrase) return 0;

  const compStyles = window.getComputedStyle(phrase);
  let animation = compStyles.getPropertyValue("animation") || "";

  // firefox support for non-shorthand property
  animation !== ""
    ? animation
    : (animation = compStyles.getPropertyValue("-moz-animation-duration"));

  // webkit support for non-shorthand property
  animation !== ""
    ? animation
    : (animation = compStyles.getPropertyValue("-webkit-animation-duration"));

  const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
  return animationTime;
};

export function randomText() {
  randomizeText();
  setInterval(randomizeText, 3000);
}
