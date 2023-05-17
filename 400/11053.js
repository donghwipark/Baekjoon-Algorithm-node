//const fs = require('fs');
// const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n').map(Number);
const input = `6
10 20 10 30 20 50`.split('\n')
const NUMBER = +input.shift()
const array = input[0].split(' ')

let dpArray = Array.from(Array(NUMBER), () => 1)


for(let i = 0; i < NUMBER; i++) {
    let max = 0
    for(let j = 0; j   < i; j++) {
        if(array[i] > array[j]&& dpArray[j] > max) {
            max = dpArray[j]
        }
    }
    dpArray[i] = max + 1
}

if(NUMBER === 1) {
    console.log(NUMBER)
} else {
    console.log(Math.max(...dpArray))
}
