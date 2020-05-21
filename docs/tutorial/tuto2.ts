
interface Person {
  readonly name: string,
  city?: string,
  friends?: ReadonlyArray<string>,
}

function printName (person: Person){
  if(person.city){
    console.log(person.name + " from " + person.city)

  }else {
    console.log(person.name)
  }
}

// Error age is not in Person /!\
const pierre:Person = {name: 'pierre', age: 36, friends: []}
const pierreFromParis:Person = {name: 'pierre', city: "paris", friends: ['milo']}

// Cannot change readonly properties
pierre.name = 'WHo ?'
pierre.friends[0] ='Toto'

printName(pierre)
printName(pierreFromParis)

