// Problem: https://www.hackerrank.com/challenges/a-very-big-sum/problem

function aVeryBigSum(arr) {
  let result = 0
  const length = arr.length

  for (let i = 0; i < length; i++) {
    result = arr[i] + result
  }
  
  return result
}

// main
let input = '';

process.stdin.resume();
process.stdin.on('data', stdin => input += stdin);
process.stdin.on('end', () => {
  input = input.trim().split(/\s+/).map(Number);
  console.log('Result:', aVeryBigSum(input));
});
