function lp (str, len, ch) {
  var tp = function(phrase, count){
    switch(count){
      case 0: return "";
      case 1: return phrase;
      default:
        if ((count%2)==0) {
          var inter = tp(phrase, count/2);
          return (inter + inter);
        }
        if ((count%3)==0) {
            var interm = tp(phrase, count/3);
            return (interm + interm + interm);
        }
        return (phrase + tp(phrase, count-1));
    }
  };
  if (ch==null) {
    return lp(str,len,' ');
  }
  str = String(str);
  var padLen = (len-str.length)-1;
  var padCount = Math.floor(padLen/ch.length);
  if((ch.length % padLen)==0) {
    return (tp(ch, padCount)+str);
  }
  return (tp(ch, padCount+1)+str);
};
module.exports = lp;
