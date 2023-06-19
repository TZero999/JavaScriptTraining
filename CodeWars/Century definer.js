let romean = ['I', 'II', 'III', 'IV', 'V',
  'VI', 'VII', 'VIII', 'IX', 'X',
  'XI', 'XII', 'XIII', 'XIV', 'XV',
  'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI'];

let years = [1705, 1900, 1601, 2000, 89];

for (let year of years) {
  let result = century(year);

  console.log(year+':')
  console.log(result+' century (arabic)');
  console.log(romean[result-1] + ' century (romean)\n');
}

function century(year) {
  return Math.ceil(year / 100);
}