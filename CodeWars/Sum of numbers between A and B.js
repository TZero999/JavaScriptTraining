let a = 0;
let b = 1;

console.log( getSum(a, b) );

function getSum(a, b)
{
  let sum = 0
  if (a < b) {
    for(let i=a; i<=b; i++) {
      sum += i;
    }
    return sum;
    
  } else {
    for(let i=b; i<=a; i++) {
      sum += i;
    };
    return sum;
  };
}

/*
Простейшее решение:

const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}
*/