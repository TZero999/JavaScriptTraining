let h = 1.80;
let w = 80;

console.log( bmi(w,h));

function bmi(weight, height) {
  let bmi = weight/(Math.pow(height, 2));
  
  console.log("You'r BMI = " + bmi);

  return bmi <= 18.5 ? 'Underweight' : bmi <= 25? 'Normal' : bmi <= 30? 'Overweight' : 'Obese';
}

/*

For website:

let h = +prompt("You'r height?", 1.80);
let w = +prompt("You'r weight?", 80);

alert( bmi(w,h));

function bmi(weight, height) {
  let bmi = weight/(Math.pow(height, 2));
  let status = bmi <= 18.5 ? 'Underweight' : bmi <= 25? 'Normal' : bmi <= 30? 'Overweight' : 'Obese';

  return `You'r BMI about ${Math.round(bmi)}. ${status}.`
}

*/