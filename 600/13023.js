/**
 * 문제
BOJ 알고리즘 캠프에는 총 N명이 참가하고 있다. 사람들은 0번부터 N-1번으로 번호가 매겨져 있고, 일부 사람들은 친구이다.

오늘은 다음과 같은 친구 관계를 가진 사람 A, B, C, D, E가 존재하는지 구해보려고 한다.

A는 B와 친구다.
B는 C와 친구다.
C는 D와 친구다.
D는 E와 친구다.
위와 같은 친구 관계가 존재하는지 안하는지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 사람의 수 N (5 ≤ N ≤ 2000)과 친구 관계의 수 M (1 ≤ M ≤ 2000)이 주어진다.

둘째 줄부터 M개의 줄에는 정수 a와 b가 주어지며, a와 b가 친구라는 뜻이다. (0 ≤ a, b ≤ N-1, a ≠ b) 같은 친구 관계가 두 번 이상 주어지는 경우는 없다.

출력
문제의 조건에 맞는 A, B, C, D, E가 존재하면 1을 없으면 0을 출력한다.

예제 입력 1 
5 4
0 1
1 2
2 3
3 4
예제 출력 1 
1
예제 입력 2 
5 5
0 1
1 2
2 3
3 0
1 4
예제 출력 2 
1
예제 입력 3 
6 5
0 1
0 2
0 3
0 4
0 5
예제 출력 3 
0
예제 입력 4 
8 8
1 7
3 7
4 7
3 4
4 6
3 5
0 4
2 7
예제 출력 4 
1
 */

const data = `6 5
0 1
0 2
0 3
0 4
0 5`.split('\n');

function Node (data) {
    this.data = data;
    this.children = [];
}

let [personNumber, relationCounts] = data[0].split(' ').map(Number);
data.shift();
let relationObj = {}
let firstNode = '';
let result = 0;

data.map((el, index) => {
    if(index === 0) {
        firstNode = (el.split(' ')[0]);
    }
    if (relationObj[el.split(' ')[0]]) {
        relationObj[el.split(' ')[0]].push(el.split(' ')[1]);
    } else {
        relationObj[el.split(' ')[0]] = [el.split(' ')[1]];
    }
    if (relationObj[el.split(' ')[1]]) {
        relationObj[el.split(' ')[1]].push(el.split(' ')[0]);
    } else {
        relationObj[el.split(' ')[1]] = [el.split(' ')[0]];
    }
});

let checkVisit = new Array(personNumber).fill(0);
const DFS = (el, count) => {
    if(result) {
        return;
    }
    if(count === 4) {
        result = 1;
        return result;
    }
    checkVisit[el] = 1;
    for(let i = 0; i < relationObj[el].length; i++) {
        const next = relationObj[el][i];
        if(!checkVisit[next]) {
            DFS(next, count + 1)
        }
    }
    checkVisit[el] = 0;
}


for(i in relationObj) {
    if(!result) {
        DFS(i, 0);
    } else {
        break;
    }
}

console.log(result);

/**
 * 
 * 인접리스트
인접행렬이 N * N 크기로 노드 간 연결 관계를 표현했다면,
인접리스트는 N * k 크기로 각 노드에 연결된 노드만을 리스트에 담은 것이다.

 

(0, 1), (0, 3), (1, 3)의 연결관계가 있다고 가정하고,
인접행렬과 인접리스트로 각각 나타내보면

 

인접행렬

0 [0, 1, 0, 1]
1 [1, 0, 0, 1]
2 [0, 0, 0, 0]
3 [1, 1, 0, 0]
인접리스트

0 [1, 3]
1 [0, 3]
2 []
3 [0, 1]
다음과 같이 표현한다.

 

표현해야 할 노드가 많아질 수록, 인접리스트가 유리할 것임은 분명하다.

 

아무튼 인접리스트를 선언해서, 다시 정보를 담은 후 dfs를 실행해보자.

 
인접리스트 코드
const sol = (input) => {
  const [N, M] = input[0].split(" ").map((v) => +v);
  const adjArr = Array.from({length:N}, ()=>Array(0)}; // N개의 행을 가지며 행마다 빈 배열을 하나씩 가진다.
  const check = new Array(N).fill(0);
  let flag = 0;
  for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(" ").map((v) => +v);
    adjArr[a].push(b);
    adjArr[b].push(a);
  } // 인접리스트에 a->b, b->a 관계를 각각 넣어준다.

  const dfs = (L, cnt) => {
    if (flag) return; // 조건을 만족하면 빠르게 재귀를 종료하기 위한 조건문.
    check[L] = 1; // 노드를 방문한다.
    if (cnt === 4) {
      flag = 1;
      return;
    }

    for (let i = 0; i < adjArr[L].length; i++) { // 현재 노드의 인접리스트인 addArr[L] 크기 이용
      const next = adjArr[L][i]; // 다음에 이동할 수도 있는 노드
      if (!check[next]) { // next 노드에 방문하지 않았다면, 방문하자.
        dfs(next, cnt + 1);
      }
    }
    check[L] = 0; // 방문했던 노드는 다시 미방문 처리한다.
  };

  for (let j = 0; j < N; j++) {
    dfs(j, 0); // 처음 방문할 노드를 선택한다.
  }
  return flag;
};

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    console.log(sol(input));
    process.exit();
  });
다음과 같이 인접 리스트를 이용하면, 시간초과 이슈 없이 문제를 해결할 수 있다.
 */