//find the sum of all distances travelled

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance;

totalDistance = trips.reduce(function(acc, trip){
  return acc + trip.distance;
}, 0);

console.log(totalDistance);

//create an object that tallies number of sitting and standing desks

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(acc, desk) {
    if (desk.type === 'sitting'){
      acc.sitting++;
      return acc;
    }
    if (desk.type === 'standing'){
      acc.standing++;
      return acc;
    } else {
      return acc;
    }
}, { sitting: 0, standing: 0 });

console.log(deskTypes);

//custom unique helper - will remove all duplicate values from an colorArray

var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
  return array.reduce(function(acc, number){
    if (!acc.includes(number)){
      acc.push(number);
    }
      return acc;
  }, [])
}

console.log(unique(numbers));
