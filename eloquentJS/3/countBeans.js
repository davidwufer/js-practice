function countBs(str) {
  return countChar(str, 'B');
}

function countChar(str, char) {
  var charCount = 0;
  for (var index = 0; index < str.length; index += 1) {
    if (str.charAt(index) == char) {
      charCount += 1;
    }
  }
  return charCount;
}

debug(countBs("BBC"));
debug(countChar("kakkerlak", "k"))
