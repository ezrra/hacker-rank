// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

function rotLeft(a, d) {
  return [...a.slice(d), ...a.slice(0, d)]
}

console.log(rotLeft([1, 2, 3, 4, 5], 4))
