// Sample graph represented as an adjacency list
const graph = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1, 3, 4],
    3: [2],
    4: [2]
  };
  
// BFS implementation
function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];
    visited.add(start);

    while (queue.length) {
        const current = queue.shift();
        
        for (const neighbor of graph[current]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}
  
// DFS implementation
function dfs(graph, start, visited = new Set()) {
    visited.add(start);
    console.log(visited);
    for (const neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    }
}

// Testing the BFS and DFS functions
bfs(graph, 0);
dfs(graph, 0);