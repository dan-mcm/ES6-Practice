//refactor the code

const fibonacci = function(n) {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibonacci = (n) => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// fat arrow or function keyword?
// add a getName function key that returns profile name using this.name

const profile = {
    name: 'Alex'
};

const profile = {
    name: 'Alex',
    getName: function(){
      return this.name;
    }
};
