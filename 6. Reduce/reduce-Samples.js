//ES5 Syntax

var numbers = [ 10, 20, 30 ];
var sum = 0;

for (var i = 0; i < numbers.length; i ++){
  sum += numbers [i];
}

console.log(sum);

//pass initial value to reduce as second argument
var reducedsum = numbers.reduce(function(sum, number){
  return sum + number;
}, 0);

console.log(reducedsum);

//more complex example
var primaryColors = [
  {color: 'red'},
  {color: 'yellow'},
  {color: 'blue'}
]

var colorArray = primaryColors.reduce(function(previous, primaryColor){
  previous.push(primaryColor.color);
  return previous;
}, []);

console.log(colorArray);

//practical example - balance parantheses solution
"()()()()"

//string.split translates string into array
function balancedParens(string){
  //positive number = true, negative = false. 0 seen as false - use ! to get inverse true/false value
  return !string.split("").reduce(function(previous, char){
    if(previous < 0){return previous} //catches case of incorrect order ")("
    if (char === "("){return ++previous;}
    if (char === ")"){return --previous;}
    return previous
  }, 0);
}

console.log(balancedParens(")("));
