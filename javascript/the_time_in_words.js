// Problem: https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

const ZERO = 0
const QUARTER_PAST = 15
const HALF = 30
const QUARTER_TO = 45

const getNumberInText = number => {
  const numbers = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    16: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine',
  }

  return numbers[number]
}

const getMinutesSubtraction = (minutes) => (minutes - 60)

function getTimeInText (hour, minutes) {
  const minute = Number(minutes)

  switch (minute) {
    case ZERO:
      return `${getNumberInText(hour)} o' clock`;
    case QUARTER_PAST:
      return `quarter past ${getNumberInText(hour)}`;
    case HALF:
      return `half past ${getNumberInText(hour)}`;
    case QUARTER_TO:
      return `quarter to ${getNumberInText(hour + 1)}`;
    default: {
      if (minute < 30) {
        const s = minute == 1 ? '' : 's'
        return `${getNumberInText(minute)} minute${s} past ${getNumberInText(hour)}`;
      }
      if (minute < 60) {
        const minutes = Math.abs(getMinutesSubtraction(minute))
        return `${getNumberInText(minutes)} minutes to ${getNumberInText(Number(hour) + 1)}`;
      }
      return 'N/A'
    }
  }
}

// main
let input = '';

process.stdin.resume();
process.stdin.on('data', stdin => input += stdin);
process.stdin.on('end', () => {
  const [hour, minutes] = input.trim().split(/\s+/)
  console.log('hour', hour)
  console.log('minutes', minutes)
  console.log('Result:', getTimeInText(hour, minutes));
});
