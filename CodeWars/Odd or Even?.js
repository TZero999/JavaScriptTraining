let numbers = [ [], [1023, 1, 2], [0, 1, 3], [0, 1, 2]  ];

for (let arrays of numbers) {
console.log( oddOrEven(arrays) );
}

function oddOrEven(array) {
  let sum = array.reduce( (a,b) => a + b, 0 );
  return sum%2 == 0 ? `${sum}: even` : `${sum}: odd`;
}