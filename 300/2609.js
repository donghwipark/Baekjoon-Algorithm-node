/*
문제
두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에는 두 개의 자연수가 주어진다. 이 둘은 10,000이하의 자연수이며 사이에 한 칸의 공백이 주어진다.

출력
첫째 줄에는 입력으로 주어진 두 수의 최대공약수를, 둘째 줄에는 입력으로 주어진 두 수의 최소 공배수를 출력한다.

예제 입력 1 
24 18
예제 출력 1 
6
72
*/

let data = '9748 7311'.split(' ').map(Number)
const A = data[0]
const B = data[1]

let GCD = () => {
    let gcd = Math.min(A, B)
    for(let i = gcd; i > 1; i--) {
        if((A % i === 0) && (B % i === 0)) {
            gcd = i
            break
        }
    }
    console.log(gcd)
}

let LCM = () => {
    let lcm = Math.max(A, B)
    while(true) {
        if((lcm % A == 0) && (lcm % B === 0)) {
            break
        }
        lcm++
    }
    console.log(lcm)
}

GCD()
LCM()