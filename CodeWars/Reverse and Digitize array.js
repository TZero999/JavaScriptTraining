let a = 35231;
// [1,3,2,5,3]
let b = 0;
// [0]

console.log( digitize(a));
console.log( digitize(b));

function digitize(n) {
  n = String(n).split('').reverse();
  return n.map(value => Number(value));
}

/*

Простейшее решение:
function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

*/