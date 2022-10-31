/*
골드바흐의 추측 다국어
시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	256 MB	60551	16755	11046	25.574%
문제
1742년, 독일의 아마추어 수학가 크리스티안 골드바흐는 레온하르트 오일러에게 다음과 같은 추측을 제안하는 편지를 보냈다.

4보다 큰 모든 짝수는 두 홀수 소수의 합으로 나타낼 수 있다.
예를 들어 8은 3 + 5로 나타낼 수 있고, 3과 5는 모두 홀수인 소수이다. 또, 20 = 3 + 17 = 7 + 13, 42 = 5 + 37 = 11 + 31 = 13 + 29 = 19 + 23 이다.

이 추측은 아직도 해결되지 않은 문제이다.

백만 이하의 모든 짝수에 대해서, 이 추측을 검증하는 프로그램을 작성하시오.

입력
입력은 하나 또는 그 이상의 테스트 케이스로 이루어져 있다. 테스트 케이스의 개수는 100,000개를 넘지 않는다.

각 테스트 케이스는 짝수 정수 n 하나로 이루어져 있다. (6 ≤ n ≤ 1000000)

입력의 마지막 줄에는 0이 하나 주어진다.

출력
각 테스트 케이스에 대해서, n = a + b 형태로 출력한다. 이때, a와 b는 홀수 소수이다. 숫자와 연산자는 공백 하나로 구분되어져 있다. 만약, n을 만들 수 있는 방법이 여러 가지라면, b-a가 가장 큰 것을 출력한다. 또, 두 홀수 소수의 합으로 n을 나타낼 수 없는 경우에는 "Goldbach's conjecture is wrong."을 출력한다.

예제 입력 1 
8
20
42
0
예제 출력 1 
8 = 3 + 5
20 = 3 + 17
42 = 5 + 37
*/

let data = `8
12
42
0`.split('\n').map(Number)

const primeNumber = [3, 5, 7, 11]
let result = ''
data.pop()

for(let number of data) {
    let indexA = 0
    let indexB = indexA + 1
    let flag = true
    while(indexA < primeNumber.length) {
        while(flag && indexB < primeNumber.length) {
            if(primeNumber[indexA] + primeNumber[indexB] === number) {
                flag = false
                result += `${number} = ${primeNumber[indexA]} + ${primeNumber[indexB]}\n`
            } else {
                indexB++
            }
        }
        indexA++
        indexB = indexA + 1
    }
}
console.log(result.trim())








