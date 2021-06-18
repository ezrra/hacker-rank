// https://www.hackerrank.com/challenges/a-very-big-sum/problem

function aVeryBigSum() {
  let result = 0
  const length = ar.length

  for (let i = 0; i < length; i++) {
    result = ar[i] + result
  }
  
  return result
}

// run
const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
aVeryBigSum(ar)
