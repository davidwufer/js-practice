function deepEqual(obj1, obj2) {
  var result = true;

  if (Object.keys(obj1).length != Object.keys(obj2).length) {
    result = false;
  }

  for (prop1 in obj1) {
    var value1 = obj1[prop1];
    var value2 = obj2[prop1];

    if (typeof value1 == "object" && value2 != null && typeof value2 == "object") {
      result = deepEqual(value1, value2);
    } else if (value1 !== value2) {
      result = false;
    }
  }

  return result;
}

var obj = {here: {is: "an"}, object: 2};
debug(deepEqual(obj, obj));
// → true
debug(deepEqual(obj, {here: 1, object: 2}));
// → false
debug(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true