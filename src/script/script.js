"use strict";
// select elements
const cursorDot = document.querySelector("[data-cursor-dot]");
// functions
const getLtterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
console.log(getLtterLowerCase());
// events
window.addEventListener("mousemove", (event) => {
    const posX = event.clientX;
    const posY = event.clientY;
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
});
