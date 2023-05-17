//const fs = require('fs');
// const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n').map(Number);
const input = `6
10 20 10 30 20 50`.split('\n')

const NUMBER = +input.shift()
let array = input[0].split(' ').map(Number)

let dpArray = Array.from(Array(NUMBER), () => 0)

const checkArray = []
for(let i = 0; i < NUMBER; i++) {
    let max = 0
    let maxIndex = -1
    for(let j = 0; j < i; j++) {
        if(array[i] > array[j]&& dpArray[j] > max) {
            max = dpArray[j]
            maxIndex = j
        }
    }
    dpArray[i] = max + 1
    checkArray[i] = maxIndex !== -1 ? checkArray[maxIndex].concat(array[i]) : [array[i]]
}

const maxNumber = Math.max(...dpArray)
console.log(maxNumber)
console.log(checkArray[dpArray.indexOf(maxNumber)].join(' '))