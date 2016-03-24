module.exports = leftpad;

function leftpad (str, len, ch) {
  'use strict';
  var str = String(str);

  if (!ch && ch !== 0) ch = ' ';

  var len = len - str.length;
  for(var i=0; i < len; i++) {
    str = ch + str;
  }

  return str;
}
