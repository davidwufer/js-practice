// Sequence
function Seq() {
}

Seq.prototype.next = function() {
  throw "Must implement next()";
}

Seq.prototype.reset = function() {
  throw "Must implement reset()";
}

// Array Sequence
function ArraySeq(arr) {
  Seq.call(this);
  this.arr = arr;
  this.index = 0;
}

ArraySeq.prototype = Object.create(Seq.prototype);

ArraySeq.prototype.next = function() {
  if (this.index > this.arr.length) {
    return null;
  } else {
    return this.arr[this.index++];
  }
}

ArraySeq.prototype.get = function() {
  return this.arr[index];
}

ArraySeq.prototype.reset = function() {
  this.index = 0;
}

// RangeSeq
function RangeSeq(begin, end) {
  Seq.call(this);
  this._begin = begin;
  this._end = end;
  this.current = begin;
}

Object.defineProperty(RangeSeq.prototype, "begin", {
  get: function() { return this._begin; }
})

Object.defineProperty(RangeSeq.prototype, "end", {
  get: function() { return this._end; }
})

RangeSeq.prototype = Object.create(Seq.prototype);

RangeSeq.prototype.next = function() {
  var result = this.get();
  this.current += 1;
  return result;
}

RangeSeq.prototype.get = function() {
  return this.current <= this._end ? this.current : null;
}

RangeSeq.prototype.reset = function() {
  this.current = begin;
}

// LogFive
function logFive(seq) {
  for (var count = 0, item = seq.next(); count < 5 && item != null; count += 1, item = seq.next()) {
    debug(item);
  }
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2

logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104

logFive(new RangeSeq(100, 101));
