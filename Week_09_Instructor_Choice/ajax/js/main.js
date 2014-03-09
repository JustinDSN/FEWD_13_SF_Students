console.log('main.js loaded');

var myNumber = 1;
var myString = 'Hello, world!';
var myBool = true;

console.log('My Number: ' + myNumber);
console.log('My String: ' + myString);
console.log('My Bool: '  + myBool);

var person = {
  "firstName" : "John",
  "lastName" : "Smith",
  "children" : [
    {
      "firstName": "John Jr.",
      "lastName": "Smith"
    },
    {
      "firstName" : "Sally",
      "lastName" : "Smith"
    }
  ],
  "class" : "middle"
};

console.log('person\'s firstName: ' + person.firstName);
console.log('person\'s lastName: ' + person.lastName);

for (i = 0; i < person.children.length; i++) {
  var printString = 'Child: ';
  printString += person.children[i].firstName;
  printString += ' ';
  printString += person.children[i].lastName;
  console.log(printString);
}

console.log('person\'s class: ' + person['class']);

person['sister'] = {
  "firstName" : "Erin",
  "lastName" : "Smith"
};

console.log('person\'s sister\'s firstName: ' + person.sister.firstName);

