export function ucfirst(str: string) {
  const firstLetter = str.substring(0, 1);
  return firstLetter.toUpperCase() + str.substring(1);
}