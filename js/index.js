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
elCopyButton.onclick = ({ target }) => {
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
