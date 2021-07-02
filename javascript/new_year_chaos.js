// Problem: https://www.hackerrank.com/challenges/new-year-chaos/problem

function minimumBribes (array) {
  let people = {}
  let count = 0
  let isTooChaotic = false;
  const length = array.length;

  for (let i = 0; i < length; i++) {
    let person = array[i];
    for (let e = i + 1; e < length; e++) {
      const nextPerson = array[e];
      if (person > nextPerson && !isTooChaotic) {
        people[person] = people[person] ? people[person] + 1 : 1;
        if (people[person] > 2) isTooChaotic = true;
        if (isTooChaotic) break;
        count++;
      }
    }
    if (isTooChaotic) break;
  }
  return isTooChaotic ? 'Too chaotic' : count;
}

// main

let input = '';

process.stdin.resume();
process.stdin.on('data', stdin => input += stdin);
process.stdin.on('end', () => {
  input = input.trim().split(/\s+/).map(Number);
  console.log('Result:', minimumBribes(input));
});

// Example
// Person 5
// Next Person 1
// Next Person 2
// Next Person 3
// Next Person 7
// Next Person 8
// Next Person 6
// Next Person 4
// Person 1
// Next Person 2
// Next Person 3
// Next Person 7
// Next Person 8
// Next Person 6
// Next Person 4
// Person 2
// Next Person 3
// Next Person 7
// Next Person 8
// Next Person 6
// Next Person 4
// Person 3
// Next Person 7
// Next Person 8
// Next Person 6
// Next Person 4
// Person 7
// Next Person 8
// Next Person 6
// Next Person 4
// Person 8
// Next Person 6
// Next Person 4
// Person 6
// Next Person 4
// Person 4