/**
<그림 1>과 같이 정사각형 모양의 지도가 있다. 1은 집이 있는 곳을, 0은 집이 없는 곳을 나타낸다. 철수는 이 지도를 가지고 연결된 집의 모임인 단지를 정의하고, 단지에 번호를 붙이려 한다. 여기서 연결되었다는 것은 어떤 집이 좌우, 혹은 아래위로 다른 집이 있는 경우를 말한다. 대각선상에 집이 있는 경우는 연결된 것이 아니다. <그림 2>는 <그림 1>을 단지별로 번호를 붙인 것이다. 지도를 입력하여 단지수를 출력하고, 각 단지에 속하는 집의 수를 오름차순으로 정렬하여 출력하는 프로그램을 작성하시오.



입력
첫 번째 줄에는 지도의 크기 N(정사각형이므로 가로와 세로의 크기는 같으며 5≤N≤25)이 입력되고, 그 다음 N줄에는 각각 N개의 자료(0혹은 1)가 입력된다.

출력
첫 번째 줄에는 총 단지수를 출력하시오. 그리고 각 단지내 집의 수를 오름차순으로 정렬하여 한 줄에 하나씩 출력하시오.

예제 입력 1 
7
0110100
0110101
1110101
0000111
0100000
0111110
0111000
예제 출력 1 
3
7
8
9
 */

let input = `7
0110100
0110101
1110101
0000111
0100000
0111110
0111000`.split('\n')

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input.shift();
const arr = input.map((item) => item.split('').map(Number))

const bfs = (x, y) => {
  const visited = {};
  const queue = [[x ,y]];
  visited[[x, y]] = true;
  visitedCoords[[x, y]] = true;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let count = 1;

  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      let X = queue.shift();
      for(let j = 0; j < 4; j++) {
        let nx = X[0] + dx[j];
        let ny = X[1] + dy[j];
        if((
          nx >= 0 &&
          ny >= 0 &&
          nx < arr.length &&
          ny < arr.length &&
          arr[nx][ny] === 1 &&
          !visited[[nx, ny]] 
        )) {
          visited[[nx,ny]] = true;
          visitedCoords[[nx,ny]] = true;
          count++;
          queue.push([nx, ny])
        }
      }
    }
  }
  return count;
};

const visitedCoords = {};
const answer = [];
for(let i = 0; i < N; i++) {
  for(let j = 0; j < N; j++) {
    if(arr[i][j] === 1 && !visitedCoords[[i, j]]) {
      answer.push(bfs(i, j));
    }
  }
}

console.log(answer.length);
answer.sort((a, b) => a - b).map(el => console.log(el));