"use strict"
function solveEquation(a, b, c) {
  const discriminant = b ** - 4 * a * c;
  let arr = [];

  if (discriminant < 0) {
    return [];
    } else if (discriminant === 0) {
    const x = -b / (2 * a);
    return [Math.round(x)];
  } else {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}