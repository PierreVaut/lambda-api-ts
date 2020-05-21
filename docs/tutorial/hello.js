"use strict";
exports.__esModule = true;
exports.user2 = void 0;
var Student = /** @class */ (function () {
    function Student(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + ' ' + person.lastName;
}
var user = new Student("jojo", "x", 42);
exports.user2 = {
    firstName: "toto",
    lastName: "lavender",
    age: 1244,
    town: "Meredith City"
};
// Array
var list = ["toto", "lulu", "zuzu"];
var list2 = [4854864, 5454, +"545", -'4545', null, NaN];
var listOfPersons = [user];
var listOfStudents = [user];
// Tuple = array w/ fixed number of elements
var tuple = ["toto", 42];
// Enum
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
console.log(Direction.Up);
// Any
var notSure = 4;
notSure = "let's change it to a string...";
// Void, null, undefined
function warnUser(message) {
    console.log(message);
}
warnUser("This is my warning message");
var u = undefined;
var n = null;
// Never
function infiniteLoop() {
    while (true) {
    }
}
function throwError() {
    throw new Error();
}
// Assertions
var someValue = "some string but TS doesn't know it :/";
console.log(someValue.length);
console.log(someValue.length);
// Object destrcturing
var _a = { a: "toto", b: "tutu" }, firstParam = _a.a, secondParam = _a.b;
console.log({ firstParam: firstParam, secondParam: secondParam });
var _b = {}, _c = _b.a, AAA = _c === void 0 ? "defaultValue" : _c, _d = _b.b, BBB = _d === void 0 ? "defaultValue" : _d;
console.log({ AAA: AAA, BBB: BBB });
