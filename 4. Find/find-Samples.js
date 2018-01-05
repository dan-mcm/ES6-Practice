// ES5 Implementation

var users = [
    { name: 'Jill' },
    { name: 'Alex' },
    { name: 'Bill' }
];

var user;

for (var i = 0; i < users.length; i ++){
  if (users[i].name === 'Alex'){
    user = users[i];
    break;
  }
}

console.log(user);

// find Implementation (return required)
var result = users.find(function(user){
  return user.name === 'Alex';
});

console.log(result)

// more complex example

function Car(model){
  this.model = model;
}

var cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
];

cars.find(function(car){
  return car.model === 'Focus';
});

var posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post' }
];

var comment = { postId: 1, content: 'Great Post' }

function postForComment(posts, comment){
  return posts.find(function(post){
    return post.id === comment.postId;
  });
}

console.log(postForComment(posts, comment));
