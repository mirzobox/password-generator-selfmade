const passwordElements = {
  upperCaseLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  get lowerCaseLetters() {
    return this.upperCaseLetters.toLowerCase();
  },
  numbers: "0123456789",
  symbols: "!@#$%^&*()_-+={}[]|:;'<,>.?",
};

export default passwordElements;
