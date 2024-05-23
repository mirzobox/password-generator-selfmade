const elLoader = document.getElementById("loader"),
  elPassword = document.getElementById("password"),
  elCopied = document.getElementById("copied"),
  elPasswordLength = document.getElementById("passwordLength"),
  elPasswordLengthRange = document.getElementById("passwordLengthRange"),
  elSettingsForm = document.getElementById("settingsForm"),
  elStrengthImg = document.getElementById("strengthImg"),
  elStrengthText = document.getElementById("strengthText"),
  elCopyButton = document.getElementById("copyButton"),
  // Query selector
  elOptions = document.querySelectorAll(".js-option");

export {
  elLoader,
  elPassword,
  elCopied,
  elCopyButton,
  elStrengthImg,
  elStrengthText,
  elSettingsForm,
  elPasswordLength,
  elOptions,
  elPasswordLengthRange,
};
