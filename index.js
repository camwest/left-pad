"use strict";

module.exports = leftpad;

function leftpad(str, len, ch) {

  if (!ch && ch !== 0) ch = ' ';

  var n = len - str.length;

  var r = "";
  while (true) {
    if (n & 1) r += ch;
    n >>= 1;
    if (n === 0) return r + String(str);
    ch += ch;
  }
}
