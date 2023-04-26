/**
 * 이분 그래프
시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
2 초	256 MB	71167	18758	11240	23.503%
문제
그래프의 정점의 집합을 둘로 분할하여, 각 집합에 속한 정점끼리는 서로 인접하지 않도록 분할할 수 있을 때, 그러한 그래프를 특별히 이분 그래프 (Bipartite Graph) 라 부른다.

그래프가 입력으로 주어졌을 때, 이 그래프가 이분 그래프인지 아닌지 판별하는 프로그램을 작성하시오.

입력
입력은 여러 개의 테스트 케이스로 구성되어 있는데, 첫째 줄에 테스트 케이스의 개수 K가 주어진다. 각 테스트 케이스의 첫째 줄에는 그래프의 정점의 개수 V와 간선의 개수 E가 빈 칸을 사이에 두고 순서대로 주어진다. 각 정점에는 1부터 V까지 차례로 번호가 붙어 있다. 이어서 둘째 줄부터 E개의 줄에 걸쳐 간선에 대한 정보가 주어지는데, 각 줄에 인접한 두 정점의 번호 u, v (u ≠ v)가 빈 칸을 사이에 두고 주어진다. 

출력
K개의 줄에 걸쳐 입력으로 주어진 그래프가 이분 그래프이면 YES, 아니면 NO를 순서대로 출력한다.

제한
2 ≤ K ≤ 5
1 ≤ V ≤ 20,000
1 ≤ E ≤ 200,000
예제 입력 1 
2
3 2
1 3
2 3
4 4
1 2
2 3
3 4
4 2
예제 출력 1 
YES
NO
 */

let input = `2
3 2
1 3
2 3
4 4
1 2
2 3
3 4
4 2`.split('\n')

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const K = +input.shift();
const SET_A = -1;
const SET_B = 1;

const dfs = (start, graph, visited) => {
  visited[start] = SET_A;
  const stack = [start];
  while (stack.length) {
    const node = stack.pop();
    const curSet = visited[node];
    const nextSet = curSet === SET_A ? SET_B : SET_A;
    if (!graph[node]) {
      continue;
    }
    for (let i = 0; i < graph[node].length; i++) {
      const adjNode = graph[node][i];
      if (visited[adjNode] === curSet) {
        return false;
      }
      if (!visited[adjNode]) {
        visited[adjNode] = nextSet;
        stack.push(adjNode);
      }
    }
  }
  return true;
};

const output = Array(K).fill('YES');


for (let i = 0; i < K; i++) {
  const [V, E] = input.shift().split(' ').map(Number);
  const edges = input.splice(0, E).map(v => v.split(' ').map(Number));
  const graph = edges.reduce((acc, v) => {
    const from = v[0];
    const to = v[1];
    if (acc[from]) {
      acc[from].push(to);
    } else {
      acc[from] = [to];
    }
    if (acc[to]) {
      acc[to].push(from);
    } else {
      acc[to] = [from];
    }
    return acc;
  }, {});
  
  const visited = Array(V + 1).fill(0);
  for (let j = 1; j <= V; j++) {
    if (visited[j]) {
      continue;
    }
    if (!dfs(j, graph, visited)) {
      output[i] = 'NO';
    break;
    }
  }
}
