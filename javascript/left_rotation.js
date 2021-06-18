// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

function rotLeft(a, d) {
  const part = a.slice(0, d)
  a.splice(0, d)
  return [...a, ...part]
}

console.log(rotLeft([1, 2, 3, 4, 5], 4))