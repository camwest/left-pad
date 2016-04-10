function lp (str, len, ch) {
  var treePad = function(phrase, count){
    switch(count){
      case 0: return "";
      case 1: return phrase;
      default:
        if ((count%2)==0) {
          var inter = treePad(phrase, count/2);
          return (inter + inter);
        }
        if ((count%3)==0) {
            var interm = treePad(phrase, count/3);
            return (interm + interm + interm);
        }
        return (phrase + treePad(phrase, count-1));
    }
  };
  if (ch==null) {
    return lp(str,len,' ');
  }
  str = String(str);
  var padLen = (len-str.length);
  var padCount = Math.floor(padLen/ch.length);
  if((ch.length % padLen)==0) {
    return (treePad(ch, padCount)+str);
  }
  return (treePad(ch, padCount+1)+str);
};
module.exports = lp;
