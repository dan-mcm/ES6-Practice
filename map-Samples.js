// ES5 Implementation

var numbers = [1,2,3];
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i ++) {
  doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers);


// Map Implementation (using anonymous function)
// note must include return keyword or else null will be returned

var numbers = [1,2,3];
var doubled = numbers.map(function(number){
  return number * 2;
})

console.log(doubled);

// More complex Example

var cars = [
  { model: 'Buick', price: 'CHEAP' },
  { model: 'Camaro', price: 'expensive'}
];

var prices = cars.map(function(car){
  return car.price;
});

console.log(prices);
