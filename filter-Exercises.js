// filter numbers only > 50

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number){
  return number > 50;
});

console.log(filteredNumbers);

//filter users with admin level access only

var users = [
 { id: 1, admin: true },
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user){
  return user.admin === true;
});

console.log(filteredUsers);

// create reject function - inverse of filter
// forEach solution...
function reject(array, iteratorFunction) {
  var output = [];
  array.forEach(function(arr){
      if(iteratorFunction(arr) !== true) {
          bag.push(arr);
      }
  });
  return output;
}

//filter solution...
function reject(array,iterationFunction){
  return array.filter(function(item){
    return !iterationFunction(item)
  });
}

var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function(number){
  return number > 15;
});
console.log(lessThanFifteen) // [ 10 ];
