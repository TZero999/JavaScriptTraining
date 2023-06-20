
let numbers = [ [], [1, 5.2, 4, 0, -1], [-2.398] ];

for (let arrays of numbers) {
console.log( sum(arrays) );
}


function sum (numbers) {
  let sum = 0;
  if (numbers === [] ) {return sum }
  else {
    for (let digit of numbers) {
      sum += digit;
    }
  return sum;
}};

/*

Простейшее решение:
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

*/