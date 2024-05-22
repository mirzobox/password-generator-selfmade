import loader from "./loader.js";
import cssClassModifiers from "./css-class-modifiers.js";
import { elCopied, elCopyButton, elPassword } from "./html-elements.js";

window.onload = () => {
  const { timeout } = cssClassModifiers;
  setTimeout(() => {
    loader();
  }, timeout);
};

// COPY-GENRATED-PASSWORD
elCopyButton.onclick = () => {
  elPassword.dataset.readyToCopy === "false"
    ? navigator.clipboard
        .writeText(elPassword.innerText)
        .then(() => {
          const { classPasswordZoneCopiedShow, timeout } = cssClassModifiers;
          elCopied.classList.add(classPasswordZoneCopiedShow);
          setTimeout(() => {
            elCopied.classList.remove(classPasswordZoneCopiedShow);
          }, timeout);
        })
        .catch(({ message }) => alert(message))
    : alert("No password generated yet !");
};
