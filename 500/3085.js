/*
문제
상근이는 어렸을 적에 "봄보니 (Bomboni)" 게임을 즐겨했다.

가장 처음에 N×N크기에 사탕을 채워 놓는다. 사탕의 색은 모두 같지 않을 수도 있다. 상근이는 사탕의 색이 다른 인접한 두 칸을 고른다. 그 다음 고른 칸에 들어있는 사탕을 서로 교환한다. 이제, 모두 같은 색으로 이루어져 있는 가장 긴 연속 부분(행 또는 열)을 고른 다음 그 사탕을 모두 먹는다.

사탕이 채워진 상태가 주어졌을 때, 상근이가 먹을 수 있는 사탕의 최대 개수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 보드의 크기 N이 주어진다. (3 ≤ N ≤ 50)

다음 N개 줄에는 보드에 채워져 있는 사탕의 색상이 주어진다. 빨간색은 C, 파란색은 P, 초록색은 Z, 노란색은 Y로 주어진다.

사탕의 색이 다른 인접한 두 칸이 존재하는 입력만 주어진다.

출력
첫째 줄에 상근이가 먹을 수 있는 사탕의 최대 개수를 출력한다.

2
CP
CP
예제 입력 1 
3
CCP
CCP
PPC
예제 출력 1 
3
예제 입력 2 
4
PPPP
CYZY
CCPY
PPCC
예제 출력 2 
4
예제 입력 3 
5
YCPZY
CYZZP
CCPPP
YCYZC
CPPZZ
예제 출력 3 
4
*/

let data = `40
YYYYYYYYYCYYYYYYYYYYYYYYYCZZZZZZZYYYYYZC
PYPCYZCPYCZZCCPZYYPZYYYYPPZZPYCCCZYZZZPY
ZPPCYCCPYYZYPPZCZPYCCCZZYYPZZPYPPPPZPCZC
ZCYYZZYCPPPCCYPYYPZZZZCCCCZZCZCYCYZCZZYC
PYZYZZCCZZCCPPYCZPYPPZYZYYYZZPPCCZYYYZCZ
PPPCZZPCCCCCCCCCCCCCCCCCCYCZYYYZCYYCPCPZ
PZYPZYPPYYYZZZPPPZPYZPYZCZZPYZCZZPPCYCCZ
YPPYYYYCCPYPZPCPPPCZCZZYZZZZYYZPZZCCCZYY
YPZCZCPZYYZCCPPPYPPCCPCYZYYYCPPPYCYYCPYC
ZPYZCCZCYZYYCPCCPPYYZPYCCPPCPZCCZCCZYYPY
CPPPCPZZZCYCPYCZYZZPYPZCYYCCZCZZPZYCPZCZ
YZYCYPCPPYPPPPYYYPYPCPCPZZPPCYZCZPZZZZYP
ZCZPYZPPYYYPYPCZYZZYZZPZCZPPPZYCZYPCPYYC
YPZPZYCCYPZZCCPYYCYZYYYYYCZYZZYZZPPYCZCZ
YCZPZCCCCCYCCCCCCCCCCCZYPYZPCZPZZPZZYPYY
YYYYYYYYYYPYYYYYYYYYYYYYYYYYYYYYYYYYYZZP
ZYZCZZCCZPZCZYCPYPCCPYZYCCPPZZCZYCZCYPYP
YYZYPZZYCPCYCZPZYCZPZCCZYCCCZZZYYYZYYPCP
YZZPZYPYCZCPPCZPYCCPYCYZPCCYYZYPCPPPYYPZ
YYZPPZYCZZZYYPYCYZCCYYZPYCCYPZCCZCCCYYZC
CYZZPPCZYZYCCPCYYCPZPPZZPCZZYZZYZZCZYYPC
PPZYZYZPZZZZYPZYYPZPPZPPZCYCPZYZPPYYYYYZ
CZZZYPZYCCYYYPPZYCYPZPCCPCYYYZZYCPYCYCYY
YCZZCZCCYPPYYZYYYPPPZZYYCCCYYZZZYZZZYYCC
YCZPZPPPZPCYYYZZYCPPZYPZYCZZZZZPYYPYCYPC
PCZZZYYZCPCPCZYYYCPYZCCPZCZPYZZPYPZPYZYY
ZZZZPPPPPYZCZCPYYCCCCCCCCCCCYCCCCCCPCCCP
CPYCYZCZCZCYCPCYYCYZCZYYZCCPZZYZPZCPYCCP
YZZYYZZZZPZZCZCYYCZZPYZYCCPCPZYCYCZPYZPZ
YZZZZZZZZZZZZZZZZZZZZZZZCZZZZZZZZZZZZZZZ
YZZPPPPPPPPPPPPPPCPPPPPYYCYCZZZCCPCCYPYZ
YYZCPYPPYZPPYCZPYCZPCPCZZZCYCZYZCPCPZPZZ
CYZPCYYYYYYYYYYYYCYYYYYYYYYYYZYYCYZYPYZC
CPZCCZZZZZZZZZZZZCZZZZZZZZZZYZCCZCPZZCCY
YYZPCPZZCYYYYYCPYCZPYYYPPZZCCZZCPPPPCCPP
YYZZPCCYZCCCYPCYYPZCZZZZZPPYZCCCCCZCPPCY
PYYYYYYYYYYYYYYYYYYYYYYPYCZZPPYZYPPPPYCC
YPZCZPZYPZPPCYCZYCYPCCCZCZZCCZYZYYCYYZCZ
CPPZZPCYYCCCYCCPZPYYZYCYZYZYPYCPPZPCPCYC
ZPCYPYZPPCYYPYZZZPPZZZCCPYCYPCYYCYPPYCZY`.split('\n')

let N = +data.shift()
data = data.map(el => el.split(''))
let result = 1
//function to check row

const checkRow = (array) => {
    for(let i = 0; i < N; i++) {
        let totalCount = 1
        for(let j = 0; j < N - 1; j++) {
            if(array[i][j] === array[i][j + 1]) {
                totalCount++;
            } else {
                totalCount = 1
            }
            if(totalCount > result) {
                result = totalCount
            } 
        }
    }
}

const checkColumn = (array) => {
    for(let i = 0; i < N; i++) {
        let totalCount = 1
        for(let j = 0; j < N - 1; j++) {
            if(array[j][i] === array[j + 1][i]) {
                totalCount++
            } else {
                totalCount = 1
            }
            if(totalCount > result) {
                result = totalCount
            } 
        }    
    }
}
checkRow(data)
checkColumn(data)

const changeByRow = () => {
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < N - 1; j++) {
            let array = [...data]
            let temp = array[i][j]
            array[i][j] = array[i][j + 1]
            array[i][j + 1] = temp
            checkRow(array)
            checkColumn(array)
            array[i][j + 1] = array[i][j]
            array[i][j] = temp
        }
    }
}
const changeByColumn = () => {
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < N - 1; j++) {
            let array = [...data]
            let temp = array[j][i]
            array[j][i] = array[j + 1][i]
            array[j + 1][i] = temp
            checkRow(array)
            checkColumn(array)
            array[j + 1][i] = array[j][i]
            array[j][i] = temp
        }    
    }
}
changeByRow()
changeByColumn()
console.log(result)
