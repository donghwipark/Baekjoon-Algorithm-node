//const fs = require('fs');
// const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n').map(Number);
const input = '3\n4\n7\n10'.split('\n').map(Number);
const TOTAL_NUMBER = input.shift()
const MOD = 1000000009
const answer = []
const MAX = Math.max(...input)

let dpArray = Array.from(Array(MAX + 1), () => [0])

dpArray[0] = [0]
dpArray[1] = [0, 1, 0, 0]
dpArray[2] = [0, 0, 1, 0]
dpArray[3] = [0, 1, 1, 1]

for(let i = 4; i <= MAX; i++) {
    dpArray[i][1] = (dpArray[i - 1][2] + dpArray[i - 1][3]) % MOD
    dpArray[i][2] = (dpArray[i - 2][1] + dpArray[i - 2][3]) % MOD
    dpArray[i][3] = (dpArray[i - 3][1] + dpArray[i - 3][2]) % MOD
}
console.log(dpArray)
for(let j = 0; j < TOTAL_NUMBER; j++) {
    console.log(input)
    answer.push(dpArray[input[j]].reduce((a, b) => ((a + b) % MOD)))
}

console.log(answer.join('\n'))
  