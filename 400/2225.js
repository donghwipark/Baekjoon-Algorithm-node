// const input = require('fs').readFileSync("./dev/stdin").toString().trim().split('\n').map(Number);
const input = '6 4'.split(' ').map(Number)

const [N, K] = input

const dp = Array.from(Array(K), () => Array.from(Array(N + 1), () => 1))

for(let i = 1; i < K; i++) {
    for(let j = 1; j <= N; j++) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
}

console.log(dp[K - 1][N] % 1000000000)