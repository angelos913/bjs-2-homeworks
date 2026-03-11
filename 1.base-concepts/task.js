"use strict"
function solveEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;
  let arr = [];

  if (discriminant < 0) {
    return [];
    } else if (discriminant === 0) {
    const x = -b / (2 * a);
    return [Math.round(x)];
  } else {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  arr.push(x1, x2);
    return arr;
}

}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = (percent / 100) / 12;
  let s = amount - contribution;

  if (s <= 0) {
    return 0;
  }

  let monthlyPayment = s * (p + (p / (((1 + p) ** countMonths) - 1)));
  let totalAmount = monthlyPayment * countMonths;

  return Number(totalAmount.toFixed(2));
}