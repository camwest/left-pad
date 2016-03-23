module.exports = leftpad;

function leftpad (str, len, ch) {
  ch = (typeof(ch)==='undefined') ? ' ' : String(ch);

  while (String(str).length < len) str = String(ch) + String(str);

  return str;
}
