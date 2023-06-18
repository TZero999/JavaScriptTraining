let array = [34, 15, 88, 2];

console.log(findSmallestInt(array));

function findSmallestInt(args) {
    let min = Infinity;
    for (let elem of args) {
      if (elem < min) {min = elem}
    }
    return min;
  }

/*

Простейшее решение:

function findSmallestInt(args) {
  return Math.min(...args)
}

*/