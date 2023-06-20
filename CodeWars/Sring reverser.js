let words = ['world', 'hello', '', 'h'];

for (let word of words) {
  console.log(solution(word));
}


function solution(str){
  return str.split('').reverse().join('');
}

/*

Второй вариант - собрать массив другим способом:
let solution = str => [...str].reverse().join('');

*/