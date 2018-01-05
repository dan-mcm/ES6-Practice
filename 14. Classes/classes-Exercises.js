// create a class Monster
// Initialize the Monster's health to 100.
// The constructor will be called with an 'options' object that has a 'name' property.
// Assign the 'name' to the Monster

class Monster {
  constructor({ name }){
    this.name = name;
    this.health = 100;
  }
}

//create a snake subclass of Monster
//The Snake should have a 'bite' method.  The only argument to this method is another instance of a Snake.
//The instance of Snake that is passed in should have their health deducated by 10

class Snake extends Monster {
  constructor(options){
    super(options);
  }

  bite(snake){
    snake.health = snake.health-10;
  }
}
