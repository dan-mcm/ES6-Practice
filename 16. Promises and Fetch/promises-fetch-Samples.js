//as JavaScript can't pause i.e. sleep(1000) due to response time of queries
//it becomes necessary to use promises to deal with long running processes
//prior to ES6 third party libraries like axios were used - now there is a built in solution

//3 states of promises: 1. unresolved, 2. resolved [callback -> then], 3. rejected [callback -> catch]

//creating promises
let promise;

promise = new Promise((resolve, reject) => {
  response();
});

promise.then(() => {
  console.log('finally finished!');
}).then(() => {
  console.log('i was also ran!!!');
});

//refactored above and added catch in case of rejected  promise:

promise
  .then(() => console.log('finally finished!'))
  .then(() => console.log('i was also ran!!!'))
  .catch(() => console.log('uh oh!'))

//case for dealing asynchroniously

promise = new Promise((resolve, reject) => {
  setTimeout(() => { //simulating long running process (3 seconds)
    resolve();
  }, 3000)
});

//ajax requests with fetch

let url = "https://jsonplaceholder.typicode.com/posts/"
fetch(url)
  .then(response => response.json()) //takes server response - pulls readable json response
  .then(data => console.log(data)) //note fetch doesnt immediately contain data! just server response!

//shortcomings of fetch
let url = "https://jsonplaceholder.typicode.com/posts123456/"
fetch(url)
  .then(data => console.log(data))
  .catch(error => console.log('BAD', error)) //expect to see the console log but dont get text 'BAD'

let url = "https://jsonplaceholder.typicode.com123/posts123456/"
fetch(url)
  .then(data => console.log(data))
  .catch(error => console.log('BAD', error))

  //if server returns error status code above 300 it does not enter catch case when using fetch :-O what?!
