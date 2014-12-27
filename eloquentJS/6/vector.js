function Vector(x, y) {
  this._x = x;
  this._y = y;
}

Object.defineProperty(Vector.prototype, "x", {
  get: function() { return this._x; }
});

Object.defineProperty(Vector.prototype, "y", {
  get: function() { return this._y; }
});

Object.defineProperty(Vector.prototype, "length", {
  get: function() { return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)); }
});

Vector.prototype.plus = function(vector) {
  return new Vector(this.x + vector.x, this.y + vector.y);
}

Vector.prototype.minus = function(vector) {
  return new Vector(this.x - vector.x, this.y - vector.y);
}

Vector.prototype.toString = function() {
  return "Vector{x: " + this.x + ", y: " + this.y + "}"
}

debug(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
debug(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
debug(new Vector(3, 4).length);
// → 5
