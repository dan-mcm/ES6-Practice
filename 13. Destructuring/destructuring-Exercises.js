//refactor using destructuring

const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer(profile) {
  var title = profile.title;
  var department = profile.department;
  return title === 'Engineer' && department === 'Engineering';
}

function isEngineer({ title, department }) {
  return title === 'Engineer' && department === 'Engineering';
}

//convert array of arrays into array of objects

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher])=>({subject, time, teacher}))

//use array desstructuring, recursion and rest/spread operators that will return
//an array of doubled values [WITHOUT USING ARRAY HELPERS]

const numbers = [1, 2, 3];

function double() {

}

//solution
function double([number, ...rest]) {
    if (!number) { return []; }
    return [number * 2, ...double(rest)]
}
