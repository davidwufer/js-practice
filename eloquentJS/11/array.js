topEnv["array"] = function() {
  var result = [];
  for (var index = 0; index < arguments.length; index += 1) {
    result.push(arguments[index]);
  }
  return result;
};

topEnv["length"] = function(array) { return array.length } ;

topEnv["element"] = function(array, index) { return array[index]; } ;

run("do(define(sum, fun(array,",
    "     do(define(i, 0),",
    "        define(sum, 0),",
    "        while(<(i, length(array)),",
    "          do(define(sum, +(sum, element(array, i))),",
    "             define(i, +(i, 1)))),",
    "        sum))),",
    "   print(sum(array(1, 2, 3))))");
// → 6
