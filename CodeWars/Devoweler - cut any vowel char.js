let str = 'This website is for losers LOL!';

console.log( disemvowel(str) );

function disemvowel(str) {
  let regexp = /[aeiou]/i;
  let newStr = '';
  
  for (i = 0; i < str.length; i++ ){
    regexp.test(str[i]) ? newStr : newStr += str[i];
  }
  
  return newStr;
}

/*

Простейшее решение:
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

*/

/*
debug:
function disemvowel(str) {
  let yes = 0;
  let regexp = /[a,e,i,o,u]/i;

  for (i = 0; i < str.length; i++ ){
    regexp.test(str[i]) ? yes++ : yes;
    console.log( `${str[i]}: ${yes}`)
  }

  console.log(yes);
  
  return str;
}

*/