/**
 * 
 * 
 * 예제 입력 1 
4
3 5 2 7
예제 출력 1 
5 7 7 -1
예제 입력 2 
4
9 5 4 8
예제 출력 2 
-1 8 8 -1
 */

let data = `4\n3 5 2 7`.split('\n');
let dataLength = +data[0];
let numArray = data[1].split(' ').map(Number);
let result = [];
let stack = [];

const printNnumber = () => {
    for(let i = dataLength - 1; i >= 0; i--) {
        while (numArray[i] >= stack[stack.length - 1]) {
            stack.pop();
        }
        if(stack.length === 0) {
            result.push(-1);
        } else {
            result.push(stack[stack.length - 1]);
        }
        stack.push(numArray[i]);
    
    }
    console.log(result.reverse().join(' '));
}

printNnumber();