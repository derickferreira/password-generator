"use strict";
// select elements
const cursorDot = document.querySelector("[data-cursor-dot]");
const inputLength = document.querySelector("#length");
const inputLetter = document.querySelector("#letter");
const inputNumber = document.querySelector("#number");
const inputSymbol = document.querySelector("#symbol");
// functions
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random()));
};
const getNumber = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
const getSymbol = () => {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
};
const generatePassword = (
  getLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymbol
) => {
  let password = "";
  const passwordLenght = inputLength ? parseInt(inputLength.value) : 0;
  let generators = [];
};
// events
window.addEventListener("mousemove", (event) => {
  if (cursorDot) {
    const posX = event.clientX;
    const posY = event.clientY;
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
  }
});
