import loader from "./loader.js";
import cssClassModifiers from "./css-class-modifiers.js";

window.onload = () => {
  const { timeout } = cssClassModifiers;
  setTimeout(() => {
    loader();
  }, timeout);
};
