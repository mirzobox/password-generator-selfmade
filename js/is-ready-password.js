import passwordElements from "./password-element.js";

export default function isReadyPassword(
  password,
  { uppercases, lowercases, symbols, numbers }
) {
  let checker = false;
  const {
    upperCaseLetters,
    lowerCaseLetters,
    symbols: symbolsForPassword,
    numbers: numbersForPassword,
  } = passwordElements;

  if (uppercases) {
    for (let index = 0; index < password.length; index++) {
      if (
        password.charCodeAt(index) >= 65 &&
        password.charCodeAt(index) <= 90
      ) {
        checker = true;
        break;
      }
      if (index === password.length - 1) return false;
    }
  }

  if (lowercases) {
    for (let index = 0; index < password.length; index++) {
      if (
        password.charCodeAt(index) >= 97 &&
        password.charCodeAt(index) <= 122
      ) {
        checker = true;
        break;
      }
      if (index === password.length - 1) return false;
    }
  }

  if (numbers) {
    for (let index = 0; index < password.length; index++) {
      if (
        password.charCodeAt(index) >= 48 &&
        password.charCodeAt(index) <= 57
      ) {
        checker = true;
        break;
      }
      if (index === password.length - 1) return false;
    }
  }

  if (symbols) {
    for (let index = 0; index < password.length; index++) {
      if (
        (password.charCodeAt(index) >= 33 &&
          password.charCodeAt(index) <= 47) ||
        (password.charCodeAt(index) >= 58 &&
          password.charCodeAt(index) <= 64) ||
        (password.charCodeAt(index) >= 91 &&
          password.charCodeAt(index) <= 96) ||
        (password.charCodeAt(index) >= 123 && password.charCodeAt(index) <= 125)
      ) {
        checker = true;
        break;
      }
      if (index === password.length - 1) return false;
    }
  }

  return checker;
}
