/**
2×n 타일링
시간 제한	메모리 제한	 제출	  정답	   맞힌 사람  정답 비율
1 초	  256 MB	120861	45967	33859	 35.845%
문제
2×n 크기의 직사각형을 1×2, 2×1 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오.

아래 그림은 2×5 크기의 직사각형을 채운 한 가지 방법의 예이다.



입력
첫째 줄에 n이 주어진다. (1 ≤ n ≤ 1,000)

출력
첫째 줄에 2×n 크기의 직사각형을 채우는 방법의 수를 10,007로 나눈 나머지를 출력한다.

예제 입력 1 
2
예제 출력 1 
2
예제 입력 2 
9
예제 출력 2 
55
 */
let N = +'1000'.trim()

let countSquareMemory = {}

let countSquareFunction = (n) => {
    if(n === 1) {
        countSquareMemory[n] = 1
    }
    if(n === 2) {
        countSquareMemory[n] = 2
    }
    if(!countSquareMemory[n]) {
        countSquareMemory[n] = (countSquareFunction(n - 1) + countSquareFunction(n - 2))
    }
    return countSquareMemory[n]
}

countSquareFunction(N)
console.log(countSquareMemory[N] % 10007)
