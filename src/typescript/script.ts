"use strict";
type CharGenerator = () => string;

// select elements
const cursorDot: HTMLDivElement | null =
  document.querySelector("[data-cursor-dot]");

const inputLength: HTMLInputElement | null = document.querySelector("#length");
const inputLetter: HTMLInputElement | null = document.querySelector("#letter");
const inputNumber: HTMLInputElement | null = document.querySelector("#number");
const inputSymbol: HTMLInputElement | null = document.querySelector("#symbol");

const generatedContainer: HTMLDivElement | null = document.querySelector(
  "#generated_password_container"
);
const generatedPassword: HTMLHeadElement | null = document.querySelector(
  "#generated_password_container h4"
);

const generateBtn: HTMLButtonElement | null =
  document.querySelector("#generate");
const copyBtn: HTMLButtonElement | null = document.querySelector("#copy_btn");

// functions
const getLetterLowerCase: CharGenerator = (): string => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase: CharGenerator = (): string => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber: CharGenerator = (): string => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const getSymbol: CharGenerator = (): string => {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
};

const generatePassword: (
  gettterLowerCase: CharGenerator,
  getLetterUpperCase: CharGenerator,
  getNumber: CharGenerator,
  getSymbol: CharGenerator
) => void = (
  getLetterLowerCase: CharGenerator,
  getLetterUpperCase: CharGenerator,
  getNumber: CharGenerator,
  getSymbol: CharGenerator
): void => {
  let password: string = "";
  const passwordLenght: number = inputLength ? parseInt(inputLength.value) : 0;

  if (isNaN(passwordLenght) || passwordLenght <= 0) {
    console.error("Invalid password length");
    return;
  }

  let generators: CharGenerator[] = [];

  if (inputLetter?.checked) {
    generators.push(getLetterLowerCase, getLetterUpperCase);
  }
  if (inputNumber?.checked) {
    generators.push(getNumber);
  }

  if (inputSymbol?.checked) {
    generators.push(getSymbol);
  }

  if (passwordLenght === 0) {
    console.error("No character types selected");
    return;
  }

  console.log("before loop");
  for (let i: number = 0; i < passwordLenght; i = i + generators.length) {
    generators.forEach(() => {
      const randomValue =
        generators[Math.floor(Math.random() * generators.length)]();

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
window.addEventListener("mousemove", (event: MouseEvent) => {
  if (cursorDot) {
    const posX = event.clientX;
    const posY = event.clientY;
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
  }
});

generateBtn?.addEventListener("click", (event: Event) => {
  event.preventDefault();

  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  );
});
