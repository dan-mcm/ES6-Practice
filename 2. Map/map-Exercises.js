// create new array containing height of each object

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image){
  return image.height;
})

// create new array containing distance/time value from each trip

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip){
  return trip.distance/trip.time;
})

// implementing 'pluck' as a function

function pluck(array, property) {
    var values = array.map(function(array){
      return array[property];
    })
    return values;
}
