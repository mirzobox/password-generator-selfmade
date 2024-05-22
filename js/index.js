import loader from "./loader.js";
import cssClassModifiers from "./css-class-modifiers.js";
import { elCopied, elCopyButton, elPassword } from "./html-elements.js";
import passwordGenerator from "./password-generator.js";

window.onload = () => {
  const { timeout } = cssClassModifiers;
  setTimeout(() => {
    loader();
  }, timeout);
};

// COPY-GENERATED-PASSWORD
elCopyButton.onclick = ({ target }) => {
  console.log(
    passwordGenerator(8, {
      uppercases: true,
      lowercases: true,
      numbers: true,
      symbols: true,
    })
  );

  elPassword.dataset.readyToCopy === "false"
    ? navigator.clipboard
        .writeText(elPassword.innerText)
        .then(() => {
          const {
            classPasswordZoneCopiedShow,
            classPasswordZoneCopyButtonMintGreen,
            timeout,
          } = cssClassModifiers;
          elCopied.classList.add(classPasswordZoneCopiedShow);
          target.classList.add(classPasswordZoneCopyButtonMintGreen);
          setTimeout(() => {
            elCopied.classList.remove(classPasswordZoneCopiedShow);
            target.classList.remove(classPasswordZoneCopyButtonMintGreen);
          }, timeout);
        })
        .catch(({ message }) => alert(message))
    : alert("No password generated yet !");
};
