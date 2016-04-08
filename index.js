module.exports = leftpad;

function leftpad (str, len, ch) {
  str = String(str);

  if (ch == null) {
    ch = ' ';
  }

  while (str.length < len) {
    str = ch + str;
  }

  return str;
}
