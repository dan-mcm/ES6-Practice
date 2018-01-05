//ES6 solution to prototype inheritance - classes


//ES5 prototype (an approach to class)
function Car2(options){
  this.title = options.title;
}

Car2.prototype.drive = function(){
  return 'Vroom';
}

const car2 = new Car2({ title: 'Focus' })
console.log(car2.drive());

//note toyota does not inherit car prototype
//toyota function below links it to Car prototype
// function Toyota(options){
//   this.color = options.color;
// }

function Toyota2(options){
  Car2.call(this, options);
  this.color = options.color;
}

//ES5 prototype nonsense
Toyota2.prototype = Object.create(Car2.prototype);
Toyota2.prototype.constructor = Toyota2;

Toyota2.prototype.honk = function() {
  return 'beep';
}

const toyota2 = new Toyota2({ color: 'red', title: 'Daily Driver' });
console.log(toyota2);
console.log(toyota2.drive());
console.log(toyota2.honk());

//ES6 implementation with classes

class Car {
  // constructor(options){
  //   this.title = options.title;
  // }

  constructor({ title }){
    this.title = title;
  }

  drive(){
    return 'Vroom!';
  }
}

const car = new Car({title: 'Toyota'});
console.log(car);
console.log(car.drive);

class Toyota extends Car {
  constructor(options){ //usually avoid destructuring in child classes
    super(options); //Car.constructor()
    this.color = options.color;
  }

  honk(){
    //super(); - this would call honk of the parent class - Car
    return 'Beep';
  }
}

const toyota = new Toyota({ title: 'japanese car', color: 'red' });
console.log(toyota.honk);
console.log(toyota);
console.log(toyota.drive);
