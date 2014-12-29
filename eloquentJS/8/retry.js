function MultiplicatorUnitFailure() {

}

MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = "MultiplicatorUnitFailure";

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure();
  }
}

function reliableMultiply(a, b) {
  var result;
  for (;;) {
    if (result != null) {
      break;
    }
    try {
      result = primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure)) {
        throw e;
      }
    }
  }
  return result;
}

debug(reliableMultiply(8, 8));
// → 64
