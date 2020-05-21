interface Person {
  firstName: string;
  lastName: string;
  age: number,
}

class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number
    ) {
      this.fullName = firstName + " " +  lastName;
  }
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + ' ' + person.lastName ;
}

let user = new Student("jojo", "x", 42)

export let user2 = {
  firstName: "toto",
  lastName: "lavender",
  age: 1244,
  town: "Meredith City"
}





// Array
let list: string[] = ["toto", "lulu", "zuzu"]
let list2: Array<number> = [4854864, 5454, +"545", -'4545',null, NaN]
let listOfPersons: Person[] = [user]
let listOfStudents: Student[] = [user]

// Tuple = array w/ fixed number of elements
let tuple: [string, number] = ["toto", 42]

// Enum
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
console.log(Direction.Up)

// Any
let notSure: any = 4
notSure = "let's change it to a string..."

// Void, null, undefined
function warnUser(message: string): void {
  console.log(message);
}
warnUser("This is my warning message")
let u: undefined = undefined;
let n: null = null;

// Never
function infiniteLoop(): never {
  while (true) {
  }
}
function throwError(): never {
  throw new Error();
}

// Assertions

let someValue: any = "some string but TS doesn't know it :/"
console.log((<string>someValue).length)
console.log((someValue as string).length)

// Object destrcturing

let { a: firstParam, b:secondParam }: {a: string, b: string} = {a:"toto", b: "tutu"}
console.log({firstParam, secondParam})

let { a: AAA = "defaultValue", b:BBB = "defaultValue" }: {a?: string, b?: string} = {}
console.log({AAA, BBB})