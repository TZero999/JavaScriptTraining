console.log( invert([1,2,3,4,5]));
console.log( invert([1,-2,3,-4,5]));
console.log( invert([]));

function invert(array) {
  let newArr = [];

  if (array.length > 0) {
    for (let elem of array) {
      if (elem > 0) {
        elem = elem - 2*elem;
        newArr.push(elem);
      } else {
        elem = elem - 2*elem;
        newArr.push(elem);
      }
    };
  };
  return newArr;
};

/* 
Простейшее решение:

function invert(array) {
return array.map(num => -num);
}
*/