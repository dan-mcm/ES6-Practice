//Basic ES6 syntax
function createBookShop(inventory){
    return {
      inventory: inventory,
      inventoryValue: function(){
        return this.inventory.reduce((total, book) => total + book.price, 0);
      },
      priceForTitle: function(title) {
        return this.inventory.find(book => book.title === title).price;
      }
    };
}

const inventory = [
  { title: 'Harry Potter', price: 10},
  { title: 'Eloquent JavaScript', price: 15}
]

const bookshop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));

//ES6 optimised syntax - using enhanced object literals

function createBookShop(inventory){
    return {
      inventory, //reference to a key and value with same name - can be condensed
      inventoryValue() => { //reference to a function can ommit both function and the colon
        return this.inventory.reduce((total, book) => total + book.price, 0);
      },
      priceForTitle(title) => {
        return this.inventory.find(book => book.title === title).price;
      }
    };
}
