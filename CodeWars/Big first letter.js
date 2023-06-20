String.prototype.toJadenCase = function () {
    let regexp = /(?:^|\s)(\S)/ug;
    return this.replace(regexp, fl => fl.toUpperCase());
  };
  
  let str = 'How can mirrors be real if our eyes aren\'t real';
  console.log( 'Not Jaden-Cased: ' + str)
  console.log( 'Jaden-Cased: ' + str.toJadenCase() );
  
  /*
  
  Вариант без регулярки:
  String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }
  
  или
  
  String.prototype.toJadenCase = function() {
    return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
  };
  
  */