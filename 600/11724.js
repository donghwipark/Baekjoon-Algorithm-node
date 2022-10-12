/*

연결 요소의 개수
시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
3 초	512 MB	79110	36144	23840	42.825%
문제
방향 없는 그래프가 주어졌을 때, 연결 요소 (Connected Component)의 개수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 정점의 개수 N과 간선의 개수 M이 주어진다. (1 ≤ N ≤ 1,000, 0 ≤ M ≤ N×(N-1)/2) 둘째 줄부터 M개의 줄에 간선의 양 끝점 u와 v가 주어진다. (1 ≤ u, v ≤ N, u ≠ v) 같은 간선은 한 번만 주어진다.

출력
첫째 줄에 연결 요소의 개수를 출력한다.

예제 입력 1 
6 5
1 2
2 5
5 1
3 4
4 6
예제 출력 1 
2
예제 입력 2 
6 8
1 2
2 5
5 1
3 4
4 6
5 4
2 4
2 3
예제 출력 2 
1
*/

let data = `6 2
3 4
4 2`.split('\n').map(el => el.split(' ').map(Number))

let [NodeNumber, edgeNumber] = data.shift()

const Graph = {}
data.map(el => {
    Graph[el[0]] ? Graph[el[0]].push(el[1]) : Graph[el[0]] = [el[1]]
    Graph[el[1]] ? Graph[el[1]].push(el[0]) : Graph[el[1]] = [el[0]]
})

const visitedNode = {}
let path = []
let connectedComponent = 0
let count = 0
const DFS = (node) => {
    let unvisitedNode = []
    if(visitedNode[node] !== 1) {
        visitedNode[node] = 1
        path.push(+node)
        unvisitedNode = Graph[node]   
        while(unvisitedNode.length > 0) {
            DFS(unvisitedNode.shift())
        }
    }
}

for(let node in Graph ) {
    path = []
    DFS(node)
    NodeNumber -= path.length
    if(path.length > 0) {
        connectedComponent++
    }
}
console.log(connectedComponent + NodeNumber)
