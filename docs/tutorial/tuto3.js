var add = function (x, y) {
    if (y === void 0) { y = 1; }
    return x + y;
};
var addTypedFunction = function (x, y) { return x + y; };
// Quite commonly you don't need to annotate the return type of a function as it can generally be inferred by the compiler.
console.log(add(3, 12));
console.log(add(5));
var multiplyBy = function (_a) {
    var NNN = _a.num, _b = _a.mult, MMM = _b === void 0 ? 1 : _b, neg = _a.neg;
    var sign = neg ? -1 : 1;
    return NNN * MMM * sign;
};
console.log(multiplyBy({ num: 5, mult: 2 }));
console.log(multiplyBy({ num: 5, neg: true }));
/*

One difference is that interfaces create a new name that is used everywhere.
Type aliases don’t create a new name — for instance, error messages won’t use the alias name.
In the code below, hovering over interfaced in an editor will show that it returns an Interface,
but will show that aliased returns object literal type. */ 
