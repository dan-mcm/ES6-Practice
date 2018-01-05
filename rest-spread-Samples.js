//sample function to examine rest operator

function addNumbers(numbers){
  return numbers.reduce((sum, number) => {
    return sum + number
  }, 0);
}

const result = addNumbers([1,2,3,4,5]);
console.log(result);

//lets try pass in just a series of items - an awkward change:

function addNumbers(a,b,c,d,e){
  const numbers = [a,b,c,d,e]
  return numbers.reduce((sum, number) => {
    return sum + number
  }, 0);
}

const result2 = addNumbers(1,2,3,4,5);

//going to use the rest operator to capture list of arugments entered
//and put them into a single array

function addNumbers(...numbers){
  const numbers = [a,b,c,d,e]
  return numbers.reduce((sum, number) => {
    return sum + number
  }, 0);
}

const result3 = addNumbers(1,2,3,4,5,6,7)

//sample function to examine spread operator

const defaultColors = ['red', 'green'];
const userFavouriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange']
//want to join these arrays together - can use the concat method
defaultColors.concat(userFavouriteColors);
//however can also use spread operator - more legible and easier to add more than 2 records
//can also add in new elements while joining arrays
const output = ['blue', ...defaultColors, ...userFavouriteColors, ...fallColors]

//sample examining rest and spread operators
function validateShoppingList(...items){
  if(items.indexOf('milk') < 0 ){
    return [ 'milk', ...items ];
  }
  return items;
}

validateShoppingList('oranges', 'bread', 'eggs')

//more practical example - startout with a mathlibrary with calculateProduct
const MathLibrary = {
  calculateProduct(a,b){
    return a * b;
  }
};
//people want you to change the name at a later point - you could just change it
//but others using your library will have broken apps if you deploy changes to library

//
const MathLibrary = {
  calculateProduct(...rest){ //rest operator
    console.log('Please use the multiply method instead');
    return this.multiply(...rest); //spread operator
  },
  multiply(a,b){
    reutrn a * b;
  }
};
