function makeAjaxRequest(url, method){
  //making this kind of default statement gets old quick - hence default function params in ES6
  if (!method){
    method = 'GET';
  }
  //logic to make the request
}

makeAjaxRequest('google.com'); //default to GET
makeAjaxRequest('google.com', 'POST'); //change to POST

//this uses default function arguments
function makeAjaxRequest(url, method = 'GET'){
  return method
}

makeAjaxRequest('google.com'); //default to GET
makeAjaxRequest('google.com', null); // method will not get reassigned
makeAjaxRequest('google.com', undefined); //default to GET (method will get reassigned)
makeAjaxRequest('google.com', 'POST'); //change to POST

//more complex example
function User(id) {
  id = this.id;
}

function generateId(){
  return Math.random * 9999999;
}

function createAdminUser(user){
    user.admin = true;
    return user;
}

createAdminUser(new User(generateId())); //ugly nested call

//smoother implementation with default arguments

function createAdminUser(user = new User(generateId())){
    user.admin = true;
    return user;
}

const user = new User(generateId())
createAdminUser(user);
