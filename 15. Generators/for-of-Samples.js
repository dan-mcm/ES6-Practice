//ES6 for of loop! More iteration options for arrays ...

const colors = [ 'red', 'green', 'blue' ];

for (let color of colors){
  console.log(color);
}

const numbers = [ 1, 2, 3, 4, 5 ];
let total = 0;

for (let number of numbers){
  total += number;
}

console.log(total);
