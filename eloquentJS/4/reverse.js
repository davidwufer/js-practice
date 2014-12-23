function reverseArray(arr) {
  var newArr = [];
  for (var index = 0; index < arr.length; index += 1) {
    newArr.unshift(arr[index]);
  }
  return newArr;
}

function reverseArrayInPlace(arr) {
  var newArr = [];
  for (var index = 0, arrayLength = arr.length; index < arrayLength; index += 1) {
    newArr.push(arr.pop());
  }

  for (var index = 0; index < newArr.length; index += 1) {
    arr.push(newArr[index]);
  }

  return arr;
}

debug(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
debug(arrayValue);
// → [5, 4, 3, 2, 1]
