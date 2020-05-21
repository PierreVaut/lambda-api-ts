function printName(person) {
    if (person.city) {
        console.log(person.name + " from " + person.city);
    }
    else {
        console.log(person.name);
    }
}
// Error age is not in Person /!\
var pierre = { name: 'pierre', age: 36, friends: [] };
var pierreFromParis = { name: 'pierre', city: "paris", friends: ['milo'] };
// Cannot change readonly properties
pierre.name = 'WHo ?';
pierre.friends[0] = 'Toto';
printName(pierre);
printName(pierreFromParis);
