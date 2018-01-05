// find the user who is an admin

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin;

admin = users.find(function(user){
  return user.admin === true;
})

console.log(admin);

// find the account with the balance of 12

var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account;

account = accounts.find(function(account){
  return account.balance === 12;
})

console.log(account);

//custom findWhere Helper
// findWhere(ladders, {height: '20 feet'}) should return ladder with id 1

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

function findWhere(array, criteria){
  var searchType = Object.keys(criteria)[0]
  array = array.find(function(arr){
    return arr[searchType]==criteria[searchType]
  });
  return array
}

console.log(findWhere(ladders, {height: 20}));
