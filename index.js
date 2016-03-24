'use strict';

module.exports = function(str, len, ch) {
  ch = ch === undefined ? ' ' : ch;
  return str.length >= len ? str :
    (new Array(len + 1).join(ch) + str)
      .slice(-len);
};
