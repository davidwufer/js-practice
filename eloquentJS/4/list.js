function arrayToList(array) {
  list = null;
  for (var index = array.length - 1; index >= 0; index -= 1) {
    element = array[index];
    list = prepend(element, list);
  }
  return list;
}

function listToArray(list) {
  var array = [];
  var item;
  while (list != null) {
    item = list['value'];
    array.push(item);
    list = list['rest'];
  }
  return array;
}

function prepend(item, list) {
  return {
    value: item,
    rest: list
  }
}

function nth(list, index) {
  while (index > 0) {
    list = list['rest'];
    index = index - 1;
  }
  return list['value'];
}

function nthRecursive(list, index) {
  if (index == 0) {
    return list['value'];
  } else {
    return nthRecursive(list['rest'], index - 1);
  }
}

debug(JSON.stringify(arrayToList([10, 20])));
// → {value: 10, rest: {value: 20, rest: null}}
debug(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
debug(JSON.stringify(prepend(10, prepend(20, null))));
// → {value: 10, rest: {value: 20, rest: null}}
debug(nth(arrayToList([10, 20, 30]), 1));
// → 20
debug(nthRecursive(arrayToList([10, 20, 30]), 1));
// → 20