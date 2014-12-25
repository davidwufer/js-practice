function every(arr, fn) {
  var mappedElements;
  mappedElements =
    arr.map(function(element) {
      return fn(element);
    });

  return mappedElements.reduce(function(left, right) {
      return left && right;
    });
}

function some(arr, fn) {
  var result = false;
  for (var index = 0; index < arr.length; index += 1) {
    if (fn(arr[index])) {
      result = true;
      break;
    }
  }
  return result;
}



debug(every([NaN, NaN, NaN], isNaN));
// → true
debug(every([NaN, NaN, 4], isNaN));
// → false
debug(some([NaN, 3, 4], isNaN));
// → true
debug(some([2, 3, 4], isNaN));
// → false
