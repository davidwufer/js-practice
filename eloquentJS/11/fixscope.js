specialForms["set"] = function(args, env) {
  var setVarName = args[0]["name"];
  var setVarValue = env[args[1]["name"]];
  
  for (var currEnv = env; currEnv != null; currEnv = Object.getPrototypeOf(currEnv)) {
    if (Object.prototype.hasOwnProperty.call(currEnv, setVarName)) {
	  currEnv[setVarName] = setVarValue;
	  return;
    }
  }
  
  throw new ReferenceError();
};

run("do(define(x, 4),",
    "   define(setx, fun(val, set(x, val))),",
    "   setx(50),",
    "   print(x))");
// → 50
run("set(quux, true)");
// → Some kind of ReferenceError
