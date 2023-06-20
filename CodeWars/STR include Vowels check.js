let str = 'abracadabra';

console.log( getCount(str) );

function getCount(str) {
  let regexp = /[aeiou]/i;
  let count = 0;

for (let char of str ){
  regexp.test(char) ? count++ : count;
}
    return count;
}

/*

Простейшее решение:
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

или

function getCount(str) {
 return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}
*/