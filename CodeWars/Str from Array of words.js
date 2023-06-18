console.log( smash(['hello', 'world', 'this', 'is', 'great']));

function smash(words){
  str = '';
  for (elem of words)
    if (elem != words.at(-1)) {
      str += elem.split(',') + ' ';
    } else {
      str += elem;
    }
  return str;
}

/*
Простейший вариант:

smash = function (words) {
  return words.join(" ");
};

*/