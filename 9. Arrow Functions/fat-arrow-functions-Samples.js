// ES5 syntax

const add = function(a,b){
  return a + b;
}

console.log(add(1,2));

// ES6 syntax

const add2 = (a,b) => {
  return a + b
}

console.log(add2(1,2));

// single JS expression - implicit function return (note no curly braces to use it)
const add3 = (a, b) => a + b;

console.log(add3(1,2));

// Advanced use
const double = function(number){
  return 2 * number;
}

console.log(double(8));

// can ommit paranthesis if function takes single argument
const double2 = number => 2 * number;
console.log(double2(8));

// if function takes no arguments blank paranthesis required
const double3 = () => {
  return 2;
}
console.log(double3);

// if using no paranthesis do not use semi colon after the function body (2*number)
const double4 = (number => 2 * number)

console.log(double4(4));

// another example - double the array

const numbers = [1,2,3];

//normal version
numbers.map(function(number){
  return 2 * number;
})
//arrowed version
numbers.map(number => 2 * number)

// problem solved by fat arrow syntax (not just convenience)
const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function(){
    return this.members.map(function(member){
      return `${member} is on team ${this.teamName}`;
    });
  }
};

// teamName is undefined - due to the value of this being undefined in this.teamName
console.log(team.teamSummary());

// an ES5 solution - binding this
const teama = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function(){
    return this.members.map(function(member){
      return `${member} is on team ${this.teamName}`;
    }.bind(this));
  }
};

// another ES5 solution - caching this as self
const teamb = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function(){
    var self = this;
    return this.members.map(function(member){
      return `${member} is on team ${self.teamName}`;
    }.bind(this));
  }
};

//an ES6 solution - using lexical this
const team2 = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function(){
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};
console.log(team2);
