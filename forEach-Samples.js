//ES5 Example
var colors = [ 'red', 'blue', 'green'];

for (var i = 0; i < colors.length; i ++){
    console.log(colors[i]);
}

//forEach array helper method - using iterator function
colors.forEach(function(color) {
  console.log(color);
});

//create array of numbers
var numbers = [1,2,3,4,5];

//create variable to hold the sum
var sum = 0;

//define iterator function outside of forEach loop
function adder(number){
  sum += number;
}

//loop over array, incrementing sum (note lack of parenthesis as don't want to
//immediately call adder - only when the loop is running)
numbers.forEach(adder)

//print the sum variable
console.log(sum);
