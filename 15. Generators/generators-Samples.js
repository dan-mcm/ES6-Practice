//generator: function that can be entered and exited multiple times

//both asterix are valid
// function *numbers(){
//
// }

function* shopping(){
  //stuff on the sidewalk

  //walking down the store

  //go into the store with cash
  const stuffFromStore = yield 'cash';
  //walking to laundry place
  const cleanClothes = yield 'laundry';

  //walking back home
  return [ stuffFromStore, cleanClothes ];
}

//stuff in the store
const gen = shopping();
console.log(gen.next()); //leaving our house
//walked into the store
//walking up and down aisles
//purchase our stuff
console.log(gen.next('groceries')); //leaving the store with groceries
//the above .next reenters the generator function from yield.
console.log(gen.next('clean clothes'));


//another generator example - using for of loop

function* colors(){
  yield 'red';
  yield 'blue';
  yield 'green';
}

const generator = colors();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

const myColors = [];

for(let color of colors()){
    myColors.push(color);
}

console.log(myColors);

//generators can be used practically to iterate over any type of data structure

//new example - only want to iterate over the employees of the engineering team

const engineeringTeam = {
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave'
}

function* teamIterator(team){
  yield team.lead;
  yield team.manager;
  yield team.engineer;
}

const names = [];

for (let name of teamIterator(engineeringTeam)){
  names.push(name)
}

console.log(names);

//new example: generator delegation

const testingTeam = {
  lead: 'Amanada',
  tester: 'Bill'
}

const engineeringTeam2 = {
  testingTeam, //testingTeam: testingTeam
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
}

function* teamIterator2(team){
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  // yield team.testingTeam.lead;
  // yield team.testingTeam.tester;

  //second generator with 2 yield statements :-O
  const testingTeamGenerator = testingTeamIterator(team.testingTeam);
  yield* testingTeamGenerator //in a generator - but have a generator with a few yields you may care about
}

function* testingTeamIterator(testingTeam){
  yield testingTeam.lead;
  yield testingTeam.tester;
}

const names2 = [];

for (let name of teamIterator2(engineeringTeam2)){
  names2.push(name)
}

console.log(names2);

//refactor of above code

const testingTeam2 = {
  lead: 'Amanada',
  tester: 'Bill',
  [Symbol.iterator]: function* (){ //special object that tells a for of loop how to iterate over object
    yield this.lead;
    yield this.tester;
  }
}

const engineeringTeam3 = {
  testingTeam2, //testingTeam: testingTeam
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* (){
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam2;
  }
}

const names3 = [];

for (let name of engineeringTeam3){
  names3.push(name)
}

console.log(names3);

//practical application example - generators with recursion (representing a tree)

class Comment {
  constructor(content, children){
    this.content = content;
    this.children = children;
  }

  //* indicates about to write a generator (improved object literal syntax within a class)
  *[Symbol.iterator](){
    yield this.content;
    //can't use array helpers here
    for (let child of this.children){ //for every node of this.child
      yield* child; //go into this.child, see if its iterable, if it is iterate through it
    }
  }
}

const children = [
  new Comment('good comment', []),
  new Comment('bad comment', []),
  new Comment('meh', [])
];

const tree = new Comment('Great Post!', children);
console.log(tree);

const values = [];
for (let value of tree)new Promise(function(resolve, reject) {
  values.push(value);
});
console.log(values);
