var arrays = [[1, 2, 3], [4, 5], [6]];
var result = arrays.reduce(function(left, right) {
  return left.concat(right);
});
debug(result);
