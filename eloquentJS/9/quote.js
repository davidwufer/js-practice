var text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
debug(text.replace(/(')([^']+'?[^']+)(')/g, "\"$2\""));
// → "I'm the cook," he said, "it's my job."

// Another way that may not be as great?
debug(text.replace(/(^|\W)'|'\W/g, "$1\""));
