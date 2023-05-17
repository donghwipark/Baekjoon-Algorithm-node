//const fs = require('fs');
// const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n').map(Number);
const input = `6
10 20 10 30 20 50`.split('\n').map(Number);
const NUMBER = +input.shift()
const array = input.split(' ')
console.log(NUMBER, array)

let dpArray = Array.from(Array(NUMBER + 1), () => [0, 1])
dpArray[1] = [0, 1]
dpArray[2] = [1, 0]

for(let i = 3; i <= NUMBER; i++) {
    dpArray[i][0] = BigInt(dpArray[i - 1][0]) + BigInt(dpArray[i - 1][1])
    dpArray[i][1] = BigInt(dpArray[i - 1][0])
}

console.log((BigInt(dpArray[NUMBER][0]) + BigInt(dpArray[NUMBER][1])).toString())
