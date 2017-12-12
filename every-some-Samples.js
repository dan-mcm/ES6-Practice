//ES5 Syntax

var computers = [
  {name: 'Apple', ram: 24},
  {name: 'Compaq', ram: 4},
  {name: 'Acer', ram: 32}
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++){
  var computer = computers[i];

  if(computer.ram < 16){
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

console.log(allComputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);

//every some implementations (require returns)

var every = computers.every(function(computer){
  return computer.ram > 16;
});

var some = computers.some(function(computer){
  return computer.ram > 16;
})

console.log(every);
console.log(some);

// another example (every helper)

var names = [
  "Alexandria",
  "Matthew",
  "Joe"
];

var shortLength = names.every(function(name){
  return name.length > 4;
});

console.log(shortLength);

var longLength = names.some(function(name){
  return name.length > 4;
});

console.log(longLength);

// real-world example
function Field(value){
  this. value = value;
}

Field.prototype.validate = function(){
  return this.value.length > 0;
}

//instead of validating each of these fields lets use the every command
var username = new Field("2cool");
var password = new Field("my_password");
var birthday = new Field("10/10/2010");

var fields = [username, password, birthday];

//long way
var validation = username.validate() && password.validate();
console.log(validation);

//short way - handles all our cases in less logic
var formIsValid = fields.every(function(field){
  return field.validate();
});

if (formIsValid){
  //allow user to submit!
} else {
  //show an error message
}
