import loader from "./loader.js";
import cssClassModifiers from "./css-class-modifiers.js";
import {
  elCopied,
  elCopyButton,
  elPassword,
  elPasswordLength,
  elPasswordLengthRange,
  elSettingsForm,
  elStrengthImg,
  elStrengthText,
} from "./html-elements.js";
import passwordGenerator from "./password-generator.js";
import strengthStateDefine from "./strength-state-define.js";

window.onload = () => {
  const { timeout } = cssClassModifiers;
  setTimeout(() => {
    loader();
  }, timeout);
};

// COPY-GENERATED-PASSWORD
elCopyButton.onclick = ({ target }) => {
  const {
    classPasswordZoneCopiedShow,
    classPasswordZoneCopyButtonMintGreen,
    timeout,
  } = cssClassModifiers;
  elPassword.dataset.readyToCopy === "true"
    ? navigator.clipboard
        .writeText(elPassword.innerText)
        .then(() => {
          elCopied.classList.add(classPasswordZoneCopiedShow);
          target.classList.add(classPasswordZoneCopyButtonMintGreen);
        })
        .catch(({ message }) => alert(message))
        .finally(() => {
          setTimeout(() => {
            elCopied.classList.remove(classPasswordZoneCopiedShow);
            target.classList.remove(classPasswordZoneCopyButtonMintGreen);
          }, timeout);
        })
    : alert("No password generated yet !");
};

elPasswordLengthRange.oninput = (e) => {
  elPasswordLength.innerText = e.target.value;
  console.log(e.target);
  e.target.style.setProperty("--value", e.target.value + "%");
};

elSettingsForm.onsubmit = (e) => {
  e.preventDefault();
  const settings = new FormData(e.target);
  const defaultSettings = {
    length: 0,
    uppercases: false,
    lowercases: false,
    numbers: false,
    symbols: false,
  };
  let readySettings = {};
  for (const [key, value] of settings.entries()) {
    readySettings[key] = value;
  }
  readySettings.length = Number(readySettings.length);
  for (const [key] of Object.entries(readySettings)) {
    if (typeof readySettings[key] !== "number") {
      readySettings[key] = readySettings[key] === "on" ? true : false;
    }
  }
  readySettings = { ...defaultSettings, ...readySettings };
  elPassword.dataset.readyToCopy = "true";
  const { classPasswordZoneTextReady } = cssClassModifiers;
  console.log(classPasswordZoneTextReady);
  elPassword.classList.add(classPasswordZoneTextReady);
  elPassword.innerText = passwordGenerator(readySettings.length, readySettings);
  switch (strengthStateDefine(readySettings)) {
    case "To weak!":
      elStrengthImg.src = location.origin + "/img/too-weak.svg";
      break;
    case "weak":
      elStrengthImg.src = location.origin + "/img/weak.svg";
      break;
    case "medium":
      elStrengthImg.src = location.origin + "/img/medium.svg";
      break;
    case "strong":
      elStrengthImg.src = location.origin + "/img/strong.svg";
      break;
  }
  elStrengthText.innerText = strengthStateDefine(readySettings);
};
