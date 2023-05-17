//const fs = require('fs');
// const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n').map(Number);
const input = `10
2 1 -4 3 4 -4 6 5 -5 1`.split('\n')

const NUMBER = +input.shift()
let inputs = input[0].split(' ').map(Number)

const dpArray = [inputs[0]]

for(let i = 1; i < NUMBER; i++) {
    dpArray[i] = (inputs[i] + dpArray[i - 1] < inputs[i]) ? inputs[i] : inputs[i] + dpArray[i - 1]
}

console.log(Math.max(...dpArray))
