import cssClassModifiers from "./css-class-modifiers.js";
import { elLoader } from "./html-elements.js";

export default function loader() {
  elLoader.classList.toggle(cssClassModifiers.classLoaderManager);
}
