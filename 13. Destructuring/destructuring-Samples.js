//ES5 Code
var expense = {
  type: 'Business',
  amount: '$45 USD'
};

var type1 = expense.type;
var amount1 = expense.amount;

//ES6 Refactoring - destructuring off an object

// not making objects or identical key/values
// want to declare a new variable called type and want it to reference the expense.type property
// want to declare a new variable called amount and want it to be set equal to expense.amount
const { type } = expense;
const { amount } = amount;

//you can combine the operation into a single line!
const { type, amount } = expense;

//this make variable type = expense.type and amount - expense.amount
//name of variable must be the same as the property your referencing
//if you reference a property that does not exist e.g. asdf - it will be undefined

//more complex examples: destructuring arguments object [pulling off properties]

//ES5 Code
var savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
}

function fileSummary(file){
  return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}

fileSummary(savedFile);

//ES6 Code
function fileSummary({ name, extension, size}, { color }){
  return `The file ${name}.${extension} is of size ${size} and color ${color}`;
}

fileSummary(savedFile, { color: 'red' });

//more complex examples: destructuring arrays [pulling off elements]
const companies = [
  'Google',
  'Facebook',
  'Uber'
]

//first element is going to be google, second is facebook, third is uber, fourth is undefined etc.
const [ name, name2, name3 ] = companies; //elements []
const { length } = lengthOfArray //properties {}

const [ name, ...rest ] = companies //rest is name of the rest of the companies (in array)

//more complex examples: destructuring arrays and objects together
const companies = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' }
];

//ES5 way to get googles location
var location = companies[0].location;

//ES6 way to get googles location
const [ { location } ] = companies //2 sets of destructuring - outside in

//outter level taking first element of the array to the object { location }
//the braces then pulls off the object of the first element called location

const Google = {
  locations: [ 'Mountain View', 'New York', 'London']
};

const { locations: [ location ] } = Google;
//{ locations } pulls the Google property array (console.log(locations))
//{ locations: [ location ] } takes the first array element from locations (console.log(location))

//When to use destructuring (1)?
//example: take user name and password and add to a database

//consider that the more arguments you have the easier for human error later in code
function signup(username, password, email, dateOfBirth, city){
  //create a new user
}

signup('myname', 'mypassword', 'myemail@example.com', '1/1/1990', 'New York');

//what if we pass an object containing those properties instead?
const user = {
  username: 'myname',
  password: 'mypassword',
  email: 'myemail@example.com',
  dateOfBirth: '1/1/1990',
  city: 'New York'
}

//as properties are destructured don't need to worry about their order in the user object
function signup({ username, password, email, dateOfBirth, city}){

}

signup(user);

//When to use destructuring (2)?
const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];

//wanted to plot the points so wanted to modify structure of object like so:
[
  { x: 4, y: 5},
  { x: 10, y: 1},
  { x: 0, y: 40}
]

//could for loop it but can also do it with ES6 code
points.map(pair => {
    //OPTION A:
    // const x = pair[0];
    // const y = pair[1];

    //OPTION B
    //const [ x, y ] = pair;
});

//OPTION C
points.map(([ x, y ]) => {
  //return { x: x, y: y};
  return { x, y };
});
