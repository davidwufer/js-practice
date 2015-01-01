

// car and cat
verify(/ca[rt]/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

// pop and prop
verify(/pr?op/,
       ["pop culture", "mad props"],
       ["plop"]);

// ferret, ferry, and ferrari
verify(/ferr[^u]+/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

// Any word ending in ious
verify(/\b\w+ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

// A whitespace character followed by a dot, comma, colon, or semicolon
verify(/\s[.,:;]/,
       ["bad punctuation ."],
       ["escape the dot"]);

// A word longer than six letters
verify(/\b\w{7,}/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

// A word without the letter e
verify(/\b[^e\s]+\b/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      debug("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      debug("Unexpected match for '" + s + "'");
  });
}
