function longestConsec(strArr, k) {
  var n = strArr.length;
  longest = "";
  str = ''

  if (n === 0 || k > n || k <= 0) {
    return "";
  }

  for (var i= 0; i < n; i++) {
    var currentStr = strArr.slice(i, k+i).join('');
    if (currentStr.length > str.length) {
      str = currentStr;
    }
  }
  return str;
}