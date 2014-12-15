function isEven(num) {
  function isEvenInternal(num) {
    if (num == 0) {
      return true;
    } else if (num == 1) {
      return false;
    } else {
      return isEvenInternal(num - 2);
    }
  }

  return isEvenInternal(Math.abs(num));
}

debug(isEven(50));
debug(isEven(75));
debug(isEven(-1));
