let x = getRandomInt(100);
let n = getRandomInt(10);

console.log( countBy(x, n) );

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function countBy(x, n) {
  let z = [];
  for (let i = 1; i<= n; i++) {
  z.push (x*i);
  }
  
  console.log(`x: ${x}, n: ${n}. \nresult: ${z}\n`);
  return z;
}