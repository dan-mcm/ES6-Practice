// Declare three variables with these same names, making sure to use 'const' or
// 'let' depending on whether you expect the value to change over time.

const name = 'Daniel';
let age = 26;
const dateOfBirth = '09/04/1991';


// Refactor code to use correct let/const

const statuses = [
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];

let message = '';
let currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
