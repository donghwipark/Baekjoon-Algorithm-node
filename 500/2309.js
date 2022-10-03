/**
 * 
 * 문제
왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다. 일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.

아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다.

아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.

입력
아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며, 아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.

출력
일곱 난쟁이의 키를 오름차순으로 출력한다. 일곱 난쟁이를 찾을 수 없는 경우는 없다.

예제 입력 1 
20
7
23
19
10
15
25
8
13
예제 출력 1 
7
8
10
13
19
20
23
 */

let data = '20\n7\n23\n19\n10\n15\n25\n8\n13';

data = data.split('\n').map(Number);

data.sort((a, b) => a - b);
let dataLength = data.length;
let currentIndex = 0;
let currentSum = data.reduce((sum, el) =>  sum + el, 0);
let resultArr = [];
let loopStatus = true
let i = 0;
let j = 1;
while(loopStatus && i < dataLength - 1) {
    while(loopStatus && j < dataLength ) {
        if((currentSum - data[i] - data[j]) === 100) {
            resultArr = data.filter((el, index) => index !== i && index !==j);
            loopStatus = false;
        }       
        j++;
    }
    i++;
    j = i + 1;
}
console.log(resultArr.join('\n'));

// while(currentSum !== 100 && resultArr.length !== 7 && currentIndex < 3) {
//     resultArr = [];
//     for(let i = currentIndex; i < currentIndex + 7; i++) {
//         console.log(currentSum, data)
//         currentSum += data[i];
//         resultArr.push(data[i]);
//    }
//    currentIndex++;
// }