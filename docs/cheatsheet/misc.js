`
VAR declarations, wherever they occur, are processed before any code is executed.
This is called hoisting.

The scope of a variable declared with var is its current execution context and closures thereof,
which is either the enclosing function and functions declared within it,
or, for variables declared outside any function, global.

Duplicate variable declarations using var will not trigger an error, even in strict mode,
and the variable will not lose its value, unless another assignment is performed.


In the global context, a variable declared using var is added
as a non-configurable property of the global object.

Global constants 'const' do not become properties of the window object, unlike var variables.

`

var x = 0; // Declares x within file scope, then assigns it a value of 0.

console.log(typeof z); // "undefined", since z doesn't exist yet

function a() {
  var y = 2; // Declares y within scope of function a, then assigns it a value of 2.

  console.log(x, y); // 0 2

  function b() {
    x = 3; // Assigns 3 to existing file scoped x.
    y = 4; // Assigns 4 to existing outer y.
    z = 5; // Creates a new global variable z, and assigns it a value of 5.
           // (Throws a ReferenceError in strict mode.)
  }

  b(); // Creates z as a global variable.
  console.log(x, y, z); // 3 4 5
}

a(); // Also calls b.
console.log(x, z);     // 3 5
console.log(typeof y); // "undefined", as y is local to function a


`This declaration creates a constant
whose scope can be either global or local to the block in which it is declared.

All the considerations about the "temporal dead zone" apply to both let and const.`

const toto = 23

const declareLocalToto = () => {
  if(toto){
    const toto = 42
    console.log("Block scoped toto", toto)
  }
  console.log("global toto", toto)
}
console.log("global toto", toto)
declareLocalToto()
console.log("global toto", toto)
