/**
문제
수빈이는 동생과 숨바꼭질을 하고 있다. 수빈이는 현재 점 N(0 ≤ N ≤ 100,000)에 있고, 동생은 점 K(0 ≤ K ≤ 100,000)에 있다. 수빈이는 걷거나 순간이동을 할 수 있다. 만약, 수빈이의 위치가 X일 때 걷는다면 1초 후에 X-1 또는 X+1로 이동하게 된다. 순간이동을 하는 경우에는 1초 후에 2*X의 위치로 이동하게 된다.

수빈이와 동생의 위치가 주어졌을 때, 수빈이가 동생을 찾을 수 있는 가장 빠른 시간이 몇 초 후인지 구하는 프로그램을 작성하시오.

입력
첫 번째 줄에 수빈이가 있는 위치 N과 동생이 있는 위치 K가 주어진다. N과 K는 정수이다.

출력
수빈이가 동생을 찾는 가장 빠른 시간을 출력한다.

예제 입력 1 
5 17
예제 출력 1 
4
 */


let input = `0 5`.split('\n')


// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const [N, K]= input.shift().split(' ').map(Number);
const path = {};

const bfs = (startNode) => {
  const visited = new Set();
  const queue = [[startNode, 0]];
  while(queue.length) {
    const [currentNode, time] = queue.shift();
    visited.add(currentNode);
    if(currentNode === K) {
      return time
    }

    for(neighbor of [currentNode - 1, currentNode + 1, currentNode * 2]) {
      if(!visited.has(neighbor) && neighbor >= 0 && neighbor <= 100000) {
        path[neighbor] = currentNode;
        visited.add(neighbor);
        queue.push([neighbor, time + 1]);
      }
    }
  }
};
const timeForVisit = bfs(N);
const visitedArray = [];

console.log(timeForVisit);
visitedArray.push(K)
visitedArray.push(path[K])
for(let i = 2; i <= timeForVisit; i++) {
  visitedArray.push(path[visitedArray[i - 1]])
}
console.log(visitedArray.reverse().join(' '));
