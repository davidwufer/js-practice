for (var num = 1; num <= 100; num += 1) {
  if (num % 15 == 0) {
    debug("FizzBuzz");
  } else if (num % 3 == 0) {
    debug("Fizz");
  } else if (num % 5 == 0) {
    debug("Buzz");
  } else {
    debug(num);
  }
}

