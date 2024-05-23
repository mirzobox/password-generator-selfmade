import strengthElements from "./strength-elements.js";

export default function strengthStateDefine(settings) {
  let counter = 0;
  for (const [key, value] of Object.entries(settings)) {
    if (typeof value === "boolean" && value) counter++;
  }
  const { tooWeak, weak, medium, strong } = strengthElements;
  switch (counter) {
    case 1:
      return tooWeak;
    case 2:
      return weak;
    case 3:
      return medium;
    case 4:
      return strong;
  }
}
