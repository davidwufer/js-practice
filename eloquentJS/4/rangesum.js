function range(start, end) {
  var step = arguments.length == 3 ? arguments[arguments.length - 1] : 1;
  var result = [];

  // Kind of gross
  for (var current = start; current != end; current += step) {
    result.push(current);
  }
  result.push(end);

  return result;
}

function sum(nums) {
  var result = 0;
  for (var index = 0; index < nums.length; index += 1) {
    result += nums[index];
  }
  return result;
}

debug(sum(range(1, 10)));

debug(range(5, 2, -1));
