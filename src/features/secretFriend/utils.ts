export function drawRandomName(names: string[]): string | null {
  if (names.length === 0) return null;
  const index = Math.floor(Math.random() * names.length);
  return names[index];
}
