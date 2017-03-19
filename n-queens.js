'use strict';

function isValid (step, v) {
  for (let i = 0; i < step; i++) {
    if (
      v[i] === v[step] ||
      Math.abs(v[i] - v[step]) === Math.abs(i - step)
    ) {
      return false;
    }
  }
  return true;
}

const solutions = [];

function queens(
  step,
  v
) {
  const n = v.length;
  // loop through values
  for (let i = 0; i < n; i++) {
    v[step] = i;
    if (isValid(step, v)) {
      if (step === (n - 1)) {
        // has reached a solution
        solutions.push([].concat(v));
      } else {
        // checks following step
        queens(step + 1, [].concat(v));
      }
    }
  }
}

// execution
queens(
  0,
  [-1, -1, -1, -1]
);

console.log('solutions: ', solutions);
