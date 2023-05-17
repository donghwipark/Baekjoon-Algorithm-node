//const fs = require('fs');
// const input = +fs.readFileSync("./dev/stdin").toString().trim()
const NUMBER = 4

const dp = Array.from(Array(NUMBER + 1), () => Infinity)
dp[0] = 0
dp[1] = 1
dp[2] = 2
dp[3] = 3

for(let i = 4; i <= NUMBER; i++) {
    for(let j = 1; j * j <= i; j++) {
        dp[i] = Math.min(dp[i - j * j] + 1, dp[i])
    }    
}

console.log(dp[NUMBER])
