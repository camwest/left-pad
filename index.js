"use strict";

module.exports = leftpad;

var cache = ['', ' ', '  ', '   ', '    ', '     '];

function leftpad(str, len, ch) {

  if (!ch && ch !== 0) ch = ' ';

  var n = len - str.length;
  if(ch === ' ' && n <= 5) return cache[n] + String(str);
  var r = "";
  while (true) {
    if (n & 1) r += ch;
    n >>= 1;
    if (n === 0) return r + String(str);
    ch += ch;
  }
}
