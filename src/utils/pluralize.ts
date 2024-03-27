export function pluralize(count: number, word: string, suffix = "s") {
  return `${count} ${word}${count !== 1 ? suffix : ""}`;
}
