/**
 * 리모컨
시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
2 초	256 MB	78273	18762	13015	22.539%
문제
수빈이는 TV를 보고 있다. 수빈이는 채널을 돌리려고 했지만, 버튼을 너무 세게 누르는 바람에, 일부 숫자 버튼이 고장났다.

리모컨에는 버튼이 0부터 9까지 숫자, +와 -가 있다. +를 누르면 현재 보고있는 채널에서 +1된 채널로 이동하고, -를 누르면 -1된 채널로 이동한다. 채널 0에서 -를 누른 경우에는 채널이 변하지 않고, 채널은 무한대 만큼 있다.

수빈이가 지금 이동하려고 하는 채널은 N이다. 어떤 버튼이 고장났는지 주어졌을 때, 채널 N으로 이동하기 위해서 버튼을 최소 몇 번 눌러야하는지 구하는 프로그램을 작성하시오. 

수빈이가 지금 보고 있는 채널은 100번이다.

입력
첫째 줄에 수빈이가 이동하려고 하는 채널 N (0 ≤ N ≤ 500,000)이 주어진다.  둘째 줄에는 고장난 버튼의 개수 M (0 ≤ M ≤ 10)이 주어진다. 고장난 버튼이 있는 경우에는 셋째 줄에는 고장난 버튼이 주어지며, 같은 버튼이 여러 번 주어지는 경우는 없다.

출력
첫째 줄에 채널 N으로 이동하기 위해 버튼을 최소 몇 번 눌러야 하는지를 출력한다.

예제 입력 1 
5457
3
6 7 8
예제 출력 1 
6
예제 입력 2 
100
5
0 1 2 3 4
예제 출력 2 
0
예제 입력 3 
500000
8
0 2 3 4 6 7 8 9
예제 출력 3 
11117
예제 입력 4 
100
3
1 0 5
예제 출력 4 
0
예제 입력 5 
14124
0
예제 출력 5 
5
예제 입력 6 
1
9
1 2 3 4 5 6 7 8 9
예제 출력 6 
2
예제 입력 7 
80000
2
8 9
예제 출력 7 
2228
힌트
예제 1의 경우 5455++ 또는 5459--

출처
데이터를 추가한 사람: applyoo
문제를 번역한 사람: baekjoon
잘못된 조건을 찾은 사람: jh05013
알고리즘 분류
보기

메모

 */

let data = `1
9
1 2 3 4 5 6 7 8 9`.split('\n')

let goalChannel = data[0]
let troubleKeyArray = data[2] || ''
let countForMinusPlus = Math.abs(+goalChannel - 100)

const checkIfAllKeysTrouble = () => {
    let troubleKeyArr = goalChannel.split('').filter(el => (troubleKeyArray.indexOf(el) > -1))
    return troubleKeyArray && troubleKeyArr.length === troubleKeyArray.length
}

const confirmNoTrouble = (num) => {
    let checkNumber = true
    troubleKeyArray.split(' ').map(el => (num.toString().split('').indexOf(el) > -1) && (checkNumber = false))
    return checkNumber
}

const getCloseNumber = () => {
    let minmumNumber = countForMinusPlus
    for (let i = 0; i <= 999999; i++) {
        if(confirmNoTrouble(i)){
            let newMin = i.toString().length + Math.abs(+goalChannel - i);
            (newMin < minmumNumber) && (minmumNumber = newMin);
        }
    }
    // let closeNumber = ''

    // //Close with big 
    // let bigFlag = true
    // let tempNumber = +goalChannel
    // while(bigFlag && countForMinusPlus > Math.abs(tempNumber - +goalChannel)) {
    //     let checkNumber = true
    //     troubleKeyArray.split(' ').map(el => (tempNumber.toString().split('').indexOf(el) > -1) && (checkNumber = false))
    //     checkNumber ? (bigFlag = false) : tempNumber++
    // }


    // let bigNumber = tempNumber

    // //Close with small
    // let smallFlag = true
    // tempNumber = goalChannel
    // while(smallFlag && tempNumber > 0) {
    //     let checkNumber = true
    //     troubleKeyArray.split(' ').map(el => (tempNumber.toString().split('').indexOf(el) > -1) && (checkNumber = false))
    //     checkNumber ? (smallFlag = false) : tempNumber--
    // }
    // let smallNumber = tempNumber
    // closeNumber = (Math.abs(smallNumber - +goalChannel) > Math.abs(bigNumber - +goalChannel)) ? bigNumber : smallNumber
    console.log(Math.min(minmumNumber, countForMinusPlus))
} 

getCloseNumber()

