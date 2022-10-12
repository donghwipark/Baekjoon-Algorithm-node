/*

배열 합치기
시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1.5 초	256 MB	27580	12692	8376	45.234%
문제
정렬되어있는 두 배열 A와 B가 주어진다. 두 배열을 합친 다음 정렬해서 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 배열 A의 크기 N, 배열 B의 크기 M이 주어진다. (1 ≤ N, M ≤ 1,000,000)

둘째 줄에는 배열 A의 내용이, 셋째 줄에는 배열 B의 내용이 주어진다. 배열에 들어있는 수는 절댓값이 109보다 작거나 같은 정수이다.

출력
첫째 줄에 두 배열을 합친 후 정렬한 결과를 출력한다.

예제 입력 1 
2 2
3 5
2 9
예제 출력 1 
2 3 5 9
예제 입력 2 
2 1
4 7
1
예제 출력 2 
1 4 7
예제 입력 3 
4 3
2 3 5 9
1 4 7
예제 출력 3 
1 2 3 4 5 7 9

*/

// let data = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let data = `4 3
2 3 5 9
1 4 7`.split('\n')

const [arrALength, arrBLength] = data.shift(' ').split(' ')
const arrA = data.shift().split(' ').map(Number)
const arrB = data.shift().split(' ').map(Number)
let result = ''

while(arrA.length > 0 || arrB.length > 0) {
  if(arrA.length === 0) {
    arrB.map(el => result += el + ' ')
    break
  }
  if(arrB.length === 0) {
    arrA.map(el => result += el + ' ')
    break
  } 
    
  let numberA = arrA[0]
  let numberB = arrB[0]
  if(numberA > numberB) {
    result += arrB.shift() + ' '
  } else if (numberA <= numberB) {
    result += arrA.shift() + ' '
  }
}

console.log(result)


// let data = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

// const [arrALength, arrBLength] = data.shift(' ').split(' ')
// const arrA = data.shift().split(' ').map(Number)
// const arrB = data.shift().split(' ').map(Number)

// console.log([...arrA, ...arrB].sort((a, b) => a - b).join(' '))
