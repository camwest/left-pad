module.exports = leftpad;

function leftpad (str, len, ch) {
  ch = (typeof(ch)=='undefined') ? ' ' : ch;

  while (String(str).length < len-1) str = ch + str;

  return str;
}
