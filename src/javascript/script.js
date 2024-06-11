"use strict";
// select elements
const cursorDot = document.querySelector("[data-cursor-dot]");
const inputLength = document.querySelector("#length");
const inputLetter = document.querySelector("#letter");
const inputNumber = document.querySelector("#number");
const inputSymbol = document.querySelector("#symbol");
const generatedContainer = document.querySelector("#generated_password_container");
const generatedPassword = document.querySelector("#generated_password_container h4");
const generateBtn = document.querySelector("#generate");
const copyBtn = document.querySelector("#copy_btn");
// functions
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
const getNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
const getSymbol = () => {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
};
const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
    let password = "";
    const passwordLenght = inputLength ? parseInt(inputLength.value) : 0;
    if (isNaN(passwordLenght) || passwordLenght <= 0) {
        console.error("Invalid password length");
        return;
    }
    let generators = [];
    if (inputLetter === null || inputLetter === void 0 ? void 0 : inputLetter.checked) {
        generators.push(getLetterLowerCase, getLetterUpperCase);
    }
    if (inputNumber === null || inputNumber === void 0 ? void 0 : inputNumber.checked) {
        generators.push(getNumber);
    }
    if (inputSymbol === null || inputSymbol === void 0 ? void 0 : inputSymbol.checked) {
        generators.push(getSymbol);
    }
    if (passwordLenght === 0) {
        console.error("No character types selected");
        return;
    }
    console.log("before loop");
    for (let i = 0; i < passwordLenght; i = i + generators.length) {
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]();
            password += randomValue;
        });
    }
    console.log("after loop");
    password = password.slice(0, passwordLenght);
    if (generatedContainer && generatedPassword) {
        generatedContainer.classList.remove("hide");
        generatedPassword.innerText = password;
    }
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
generateBtn === null || generateBtn === void 0 ? void 0 : generateBtn.addEventListener("click", (event) => {
    event.preventDefault();
    generatePassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol);
});
