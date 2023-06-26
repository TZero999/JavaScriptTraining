let input = [1,2,2,3,3,3,4,3,3,3,2,2,1];

findOdd(input);

function findOdd(A) {

let cycles = new Set(A);
let array = Array.from(cycles);
  
console.log (cycles);
console.log (cycles.size);
console.log(array);
  
for (let i = 0; i <= cycles.size+20; i++){
  let count = 0;

  for (let j = 0; j < A.length; j++){
    String(A[i]).includes(A[j]) ? count++ : count;
  }
  console.log(`Число ${A[i]} встречается ${count} раз.`)
}
}

/*
let input = [1,2,2,3,3,3,4,3,3,3,2,2,1];

findOdd(input);

function findOdd(A) {

let cycles = new Set(A);
let array = Array.from(cycles);
  
console.log (cycles);
console.log (cycles.size);
console.log(array);
  
for (let i = 0; i <= cycles.size+20; i++){
  let count = 0;

  for (let j = 0; j < A.length; j++){
    String(A[i]).includes(A[j]) ? count++ : count;
  }
  console.log(`Число ${A[i]} встречается ${count} раз.`)
}
}

//Object.entries(prices).map(([key, value]) => [key, value * 2])

/*
  let map = new Map();  
  
  for (let digit of A){
    if ( !map.has(digit) ) {
      let count = 1;
      map.set(digit, count)
    } else { map.set(digit) };
  }
  return map;
*/


/*
function findOdd(input) {

let digits = [];
let counts = [];

for (let i = 0; i < input.length; i++) {
  if ( !digits.includes(input[i]) ) {
    digits.push(input[i]);
    counts.push(count += 1);
  } else {
  ;
  }
}
  console.log(digits);
  console.log(counts);
}
*/