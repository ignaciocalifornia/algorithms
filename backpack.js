'use strict';

let bestValue = 0;
let bestSolution = [];

function backpack (step, objs, newWeight, newValue, solution) {
  const n = objs.length;
  if (step === n) {
    return;
  }

  // pick or not the object
  for (let i = 0; i <= 1; i++) {
    // new condition
    const newSolution = [].concat(solution);
    newSolution[step] = i;

    const obj = objs[step];
    const weight = obj[0];
    const value = obj[1];

    if (i === 1) {
      newWeight = newWeight - weight;
      newValue = newValue + value;
    }

    // valid
    if (newWeight >= 0) {
      // if final and if better, register
      if (bestValue < newValue && step === n - 1) {
        bestValue = newValue;
        bestSolution = [].concat(newSolution);
      } else {
        backpack(step + 1, objs, newWeight, newValue, newSolution);
      }
    }
  }
}

backpack(
  0, // object step
  [[12, 4], [2, 2], [1, 2], [1, 1], [4, 10]], // objs
  15, // maxWeigh
  0, // value
  [-1, -1, -1, -1, -1] // solution
);

console.log('bestValue: ', bestValue);
console.log('bestSolution: ', bestSolution);
