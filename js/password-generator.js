import isReadyPassword from "./is-ready-password.js";
import passwordElements from "./password-element.js";

export default function passwordGenerator(
  length,
  { uppercases, lowercases, numbers, symbols }
) {
  const {
    upperCaseLetters,
    lowerCaseLetters,
    numbers: numbersForPassword,
    symbols: symbolsForPassword,
  } = passwordElements;

  let charSet = "";
  let password = "";
  if (uppercases) charSet += upperCaseLetters;
  if (lowercases) charSet += lowerCaseLetters;
  if (numbers) charSet += numbersForPassword;
  if (symbols) charSet += symbolsForPassword;

  // Set stack
  const stack = new Uint8Array(length);
  crypto.getRandomValues(stack);

  stack.forEach((number) => {
    password += charSet[number % charSet.length];
  });

  if (isReadyPassword(password, { uppercases, lowercases, numbers, symbols })) {
    return password;
  } else {
    return passwordGenerator(length, {
      uppercases,
      lowercases,
      numbers,
      symbols,
    });
  }
}
