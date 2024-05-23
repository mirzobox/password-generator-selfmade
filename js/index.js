import loader from "./loader.js";
import cssClassModifiers from "./css-class-modifiers.js";
import {
  elCopied,
  elCopyButton,
  elOptions,
  elPassword,
  elPasswordLength,
  elPasswordLengthRange,
  elSettingsForm,
  elStrengthImg,
  elStrengthText,
} from "./html-elements.js";
import passwordGenerator from "./password-generator.js";
import strengthStateDefine from "./strength-state-define.js";
import defaultSettings from "./default-settings.js";

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
  if (elPassword.dataset.readyToCopy === "true") {
    navigator.clipboard
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
      });
  } else return false;
};

elPasswordLengthRange.oninput = (e) => {
  elPasswordLength.innerText = e.target.value;
};

elSettingsForm.onsubmit = (e) => {
  e.preventDefault();
  const settings = new FormData(e.target);
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
  elPassword.classList.add(classPasswordZoneTextReady);
  elPassword.innerText = passwordGenerator(readySettings.length, readySettings);
  const { img, text } = strengthStateDefine(readySettings);
  elStrengthText.innerText = text;
  elStrengthImg.src = location.origin + img;
};

// Options
elOptions.forEach((option) => {
  option.onclick = (e) => {
    const element = e.target.previousElementSibling.checked;
    e.target.previousElementSibling.checked = !element;
  };
});
