//return true if every user has submitted a request form

var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted;

hasSubmitted = users.every(function(user){
  return user.hasSubmitted === true;
});

console.log(hasSubmitted);

//given objects representing network requests assign true to variable in
//progress if status is pending

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress;

inProgress = requests.some(function(request){
  return request.status === 'pending';
});

console.log(inProgress);
