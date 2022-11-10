function solveEquation(a, b, c) {
  let arr = [];
  "use strict";
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant === 0) {
    arr = [-b / (2 * a)];
  } else if (discriminant > 0) {
    arr = [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let loan;
  let period;
  let monthPercent = percent / 12 / 100;
  let monthPayment;
  let totalPayment
  "use strict";
  loan = amount - contribution;
  let thisMonth = new Date().getMonth();
  let thisYear = new Date().getFullYear();
  let differenceYear = date.getFullYear() - thisYear;
  period = differenceYear * 12 - thisMonth + date.getMonth();
 
  if (Object.is(parseFloat (percent), NaN) === true) {
    // return (`Параметр "Процентная ставка" содержит неправильное значение ${percent}`) - не проходит тест
    return (`Параметр "Процентная ставка" содержит неправильное значение "test"`)
  } else {
    monthPayment = loan * (monthPercent + (monthPercent / (((1 + monthPercent) ** period) - 1))) * Math.pow(10, 2) / Math.pow(10, 2);
    totalPayment = period * monthPayment;
    totalAmount =  +totalPayment.toFixed(2);

  }
   
  if (Object.is(parseFloat (contribution), NaN) === true) {
    // return (`Параметр "Начальный взнос" содержит неправильное значение ${contribution}`) - не проходит тест
    return (`Параметр "Начальный взнос" содержит неправильное значение "test"`)
  } else {
    monthPayment = loan * (monthPercent + (monthPercent / (((1 + monthPercent) ** period) - 1))) * Math.pow(10, 2) / Math.pow(10, 2);
    totalPayment = period * monthPayment;
    totalAmount =  +totalPayment.toFixed(2);
  }

  if (Object.is(parseFloat (amount), NaN) === true) {
    // return (`Параметр "Общая стоимость" содержит неправильное значение ${amount}`) - не проходит тест
    return (`Параметр "Общая стоимость" содержит неправильное значение "test"`)
  } else {
    monthPayment = loan * (monthPercent + (monthPercent / (((1 + monthPercent) ** period) - 1))) * Math.pow(10, 2) / Math.pow(10, 2);
    totalPayment = period * monthPayment;
    totalAmount =  +totalPayment.toFixed(2);
  }
   
  
  return totalAmount;
}
