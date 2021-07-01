// Problem: https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(candles) {
  let cake = {};
  let max = 0;
  const length = candles.length;

  for (let i = 0; i < length; i++) {
    const candle = candles[i];
    cake[candle] = cake[candle] ? cake[candle] + 1 : 1;
  }

  for (const candle in cake) {
    if (cake[candle] > max) {
      max = cake[candle];
    }
  }
  
  return max
}

// main

let input = '';

process.stdin.resume();
process.stdin.on('data', stdin => input += stdin);
process.stdin.on('end', () => {
  input = input.trim().split(/\s+/).map(Number);
  console.log('Result:', birthdayCakeCandles(input));
});