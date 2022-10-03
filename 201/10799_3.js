// ()(((()())(())()))(()) 17
// (((()(()()))(())()))(()()) 24

let data = '(((()(()()))(())()))(()())';
let stack = [];
let result = 0;

const divideUnit = (data) => {
    for(let i = 0; i < data.length; i++) {
        if(data[i] === '(' && data[i + 1] === ')') {
            result += stack.length;
            i++;
        }
        else if(data[i] === '(') {
            stack.push(data[i]);
        }
        else if(data[i] === ')') {
            stack.pop();
            ++result;
        }
    }
    console.log(result);
}

divideUnit(data);
