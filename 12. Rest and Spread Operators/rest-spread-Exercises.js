//refactor using rest operator

function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];

  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

function product(...numbers) {
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

//refactor using the spread operator
function join(array1, array2) {
  return array1.concat(array2);
}

function join(array1, array2) {
  return [...array1, ...array2];
}

//refactor using only the rest operator
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}

function unshift(array, ...items) {
  return [...items, ...array];
}
