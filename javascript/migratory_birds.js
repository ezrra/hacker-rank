// Problem: https://www.hackerrank.com/challenges/migratory-birds/

function migratoryBirds(arr) {
  let max = 0;
  let birds = {};
  let common = null;

  for (let a = 0; a < arr.length; a++) {
    const bird = arr[a];
    birds[bird] = birds[bird] ? birds[bird] + 1 : 1;
  }

  for (const b in birds) {
    if (birds[b] > max) {
      common = b;
      max = birds[b];
    }
  }

  return common;
}
