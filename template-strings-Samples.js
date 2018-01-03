//template strings/literals/interpolation

//ES5 syntax

function getMessage(){
  const year = new Date().getFullYear();
  return "The year is " + year;
}

console.log(getMessage());

//ES6 syntax

function getMessage(){
  const year = new Date().getFullYear();
  return `The year is ${year}`;
}

function getMessage2(){
  return `The year is ${new Date().getFullYear()}`;
}

console.log(getMessage());
console.log(getMessage2());
