group === 'A' ? group = 'B' : group = 'A'
const node = needVisitedNode.shift()
visitedNode.push(node)
groupObj[node] = group
if(!visitedNode.includes(node)) {
    if(tree[node]) {
        tree[node].map(el => groupObj[el] = group)
    }
    needVisitedNode = [...needVisitedNode, ...tree[node]]
}
}
console.log(visitedNode, groupObj)
}
