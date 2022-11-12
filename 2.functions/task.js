// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;

  for (i = 0; i < arr.length; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum = sum + arr[i];
  }

  avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum = sum + arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, worker2) {
  let max = 0
  let sum;
  for (let i = 0; i < arrOfArr.length; i += 1) {
    sum = worker2(arrOfArr[i]);
    if (max < sum) {
      max = sum;
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let difference;
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  difference = Math.abs(max - min);

  return difference;
}
