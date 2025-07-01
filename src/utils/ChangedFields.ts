export function getChangedFields<T extends object>(original: T, updated: T): Partial<T> {
  const result: Partial<T> = {};
  const camposIgnorados = ["rol"];

  for (const key in updated) {
    if (camposIgnorados.includes(key)) continue;

    const originalValue = original[key];
    const updatedValue = updated[key];

    if (
      updatedValue !== undefined &&
      updatedValue !== null &&
      updatedValue !== "" &&
      updatedValue !== originalValue
    ) {
      result[key] = updatedValue;
    }
  }
  return result;
}
