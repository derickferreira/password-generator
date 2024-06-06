"use strict";
// select elements
const cursorDot: HTMLDivElement | null =
  document.querySelector("[data-cursor-dot]");

// functions
const getLtterLowerCase = (): String => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

// events
window.addEventListener("mousemove", (event: MouseEvent) => {
  if (cursorDot) {
    const posX = event.clientX;
    const posY = event.clientY;
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
  }
});
