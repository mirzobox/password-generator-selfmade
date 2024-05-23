export default function strengthStateDefine(settings) {
  let stateIndex = 0;
  const state = ["To weak!", "weak", "medium", "strong"];
  for (const [key, value] of Object.entries(settings)) {
    if (typeof value === "boolean" && value) stateIndex++;
  }
  return state[stateIndex - 1];
}
