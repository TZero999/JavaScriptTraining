let n = getRandomIntArbitrary(-5, 20);
let m = getRandomIntArbitrary(-5, 50);

paperwork(n, m);

function paperwork(n, m) {
  (n <= 0 || m <= 0) ? result = 0 : result = n*m;
  console.log(`  ${n} classmates want copy ${m} pages.
  You need take ${result} blank pages.\n`);
  }

function getRandomIntArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};