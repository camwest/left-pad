module.exports = leftpad;

function leftpad (str, len, ch) {
  ch = (typeof(ch)==='undefined') ? ' ' : "" + ch;
  str = "" + str

  while (str.length < len) str = ch + str;

  return str;
}
