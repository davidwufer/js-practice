function reverse() {
    var textElement = document.getElementById("input");
    var input = textElement.value;

    var result = reverseIter(input);
    // var result = reverseRecursive(input);

    textElement.value = result;
};

function reverseIter(str) {
    var result = "";
    for (index = 0; index < str.length; index += 1) {
        result = str.charAt(index).concat(result);
    }
    return result;
};

function reverseRecursive(str) {
    if (str.length <= 1) {
        return str;
    } else {
        var leftIndex = 0;
        var rightIndex = str.length - 1;
        var leftChar = str.charAt(leftIndex);
        var rightChar = str.charAt(rightIndex);
        return rightChar.concat(reverseRecursive(str.substr(leftIndex + 1, rightIndex - 1)).concat(leftChar));
    }
};