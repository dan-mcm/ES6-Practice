
var color = 'red';
console.log(color);

var name = 'Jane';
var title = 'Software Engineer';
var hourlyWage = 40;

// ES6

const name = 'Jane';
let title = 'Software Engineer';
let hourlyWage = 50;

// some time later...

title = 'Senior Software Engineer';

console.log (name, title, hourlyWage);

//more complex practical use

function count(targetString){
  const characters = ['a', 'e', 'i', 'o', 'u']
  let number = 0;

  for (let i = 0; i < targetString.length; i ++){
    if (characters.includes(targetString[i])){
      number++;
    }
  }
  return number;
}

count('aeiobzxceiaipbiox');
