'use strict'

module.exports = trimTrailingLines

var line = '\n'

// Remove final newline characters from `value`.
function trimTrailingLines(value) {
  var string = String(value)
  var index = string.length

  while (string.charAt(--index) === line) {
    // Empty
  }

  return string.slice(0, index + 1)
}
