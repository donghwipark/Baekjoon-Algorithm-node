//const fs = require('fs');
// const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n').map(Number);
const input = '1'.split('\n').map(Number);
const NUMBER = +input
const MOD = 1000000000

let dpArray = Array.from(Array(NUMBER + 1), () => [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
dpArray[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1]

for(let i = 2; i <= NUMBER; i++) {
    for(let j = 0; j <= 9; j++) {
        switch(j) {
            case 0:
                dpArray[i][j] = dpArray[i - 1][1] % MOD
                break
            case 9:
                dpArray[i][j] = dpArray[i - 1][8] % MOD
                break
            default:
                dpArray[i][j] = (dpArray[i - 1][j - 1] + dpArray[i - 1][j + 1]) % MOD
                break
        }
    }
}

console.log(dpArray[NUMBER].reduce((a, b) => (a + b) % MOD, 0))
