/*
 Having a matrix n x n
 Find the path from the position (0,0) to (n-1, n-1) by moving down or right

 Representation:
 0: invalid path
 1: valid path

 n = 4

      0 1 2 3

 0  [[1 0 1 0]
 1   [1 1 1 1]
 2   [1 0 1 0]
 3   [1 0 1 1]]

 Solution representation:
[[1 0 0 0],
 [1 1 1 0],
 [0 0 1 0],
 [0 0 1 1]]

 */

'use strict';

let solution = [];

function maze (matrix, s, i, j, n) {
  if (i >= n || j >= n || i < 0 || j < 0) {
    return;
  }

  if (matrix[i][j] != 1) {
    return;
  }

  // we need to create a new copied array.
  // javascript passes objects - an array is an object - by reference.
  const newS = s.map((array) => array.slice());

  newS[i][j] = 1;

  if (i == (n - 1) && j == (n - 1)) {
    solution = newS;
  } else {
    maze (matrix, newS, i + 1, j, n);
    maze (matrix, newS, i, j + 1, n);
  }
}

maze(
  [
    [1, 0, 1, 1, 1, 0],
    [1, 1, 1, 0, 1, 1],
    [0, 0, 1, 1, 0, 1],
    [0, 0, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 1],
    [0, 0, 1, 1, 1, 1],
  ], // maze matrix
  [
    [1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1],
  ], // initial solution matrix
  0,
  0,
  6 // matrix length
);

console.log('solution: \n', solution);
