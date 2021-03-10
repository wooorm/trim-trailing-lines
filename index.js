// Remove final newline characters from `value`.
export function trimTrailingLines(value) {
  return String(value).replace(/\n+$/, '')
}
