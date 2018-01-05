//ES5 Implementation

var products = [
  {name: 'cucumber', type: 'vegetable'},
  {name: 'banana', type: 'fruit'},
  {name: 'celery', type: 'vegetable'},
  {name: 'orange', type: 'fruit'}
];

var filteredProducts = [];

for (var i =0; i < products.length; i++){
  if ( products[i].type === 'fruit'){
    filteredProducts.push(products[i]);
  }
}
console.log(filteredProducts);

//filter Implementation (requires return statement)
var result = products.filter(function(product){
  return product.type === 'fruit';
});

console.log(result)

//more complex example
var products = [
  {name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
  {name: 'banana', type: 'fruit', quantity: 10, price: 15},
  {name: 'celery', type: 'vegetable', quantity: 30, price: 9},
  {name: 'orange', type: 'fruit', quantity: 3, price: 5}
];

// type vegetable, quatntiy greater than 0, price less than 10
var result = products.filter(function(product){
  return product.type === 'vegetable'
  && product.quantity > 0
  && product.price < 10
})

console.log(result);

//real-world example
var post = { id: 4, title: 'New Post'};
var comments = [
  {postId: 4, content: 'awesome post'},
  {postId: 3, content: 'it was ok'},
  {postId: 4, content: 'neat'}
];

function commentsForPost(post, comments){
  return comments.filter(function(comment){
    return comment.postId === post.id;
  });
}

var x = commentsForPost(post, comments);
console.log(x);
