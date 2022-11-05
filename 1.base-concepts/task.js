function solveEquation(a, b, c) {
  let arr;
  "use strict";
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr = [-b / (2 * a)];
  } else if (d > 0) {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let loan;
  let period;
  let today = Date.now();
  "use strict";

  switch (percent === !'null' && contribution === !'null' && amount === !'null') {
    case (typeof percent === !'number'): // "если параметр функции будет строкой, то попытайтесь преобразовать его в число."
      percent = +percent;
      break;
    case (typeof contribution === !'number'):
      contribution = +contribution;
      break;
    case (typeof amount === !'number'):
      amount = +amount;
      break;
    default: // "Во всех остальных случаях возвращайте строку". Но как выбрать нужный параметр не понял. Причем даже если я ввожу просто буквы в поле, то тип переменной все равно остается number.
      alert ('Параметр <название параметра> содержит неправильное значение <значение параметра>')
  }
  loan = amount - contribution;
  period = Math.round((date - today) / 2548800000); // 2548800000 это среднее количесто миллисекунд в месяц
  totalAmount = +Math.round((period * (loan * ((percent / 12 / 100) + ((percent / 12 / 100) / (((1 + (percent / 12 / 100)) ** period) - 1))))) * Math.pow(10, 2)) / Math.pow(10, 2);

  return totalAmount;
}
