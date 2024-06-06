"use strict";
// select elements
const cursorDot = document.querySelector("[data-cursor-dot]");
// functions
// events
window.addEventListener("mousemove", (event) => {
  const posX = event.clientX;
  const posY = event.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;
});