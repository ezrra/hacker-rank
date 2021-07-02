// Problem: https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

function rotLeft(a, d) {
  return [...a.slice(d), ...a.slice(0, d)]
}

// main
let input = '';

process.stdin.resume();
process.stdin.on('data', stdin => input += stdin);
process.stdin.on('end', () => {
  const [number, ...array] = input.trim().split(/\s+/)
  console.log('Result:', rotLeft(array, number).join(' '));
});
