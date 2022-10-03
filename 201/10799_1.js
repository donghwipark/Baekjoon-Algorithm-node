// ()(((()())(())()))(()) 17
// (((()(()()))(())()))(()()) 24

let data = '(((()(()()))(())()))(()())';
let unit = [];
let result = 0;

const divideUnit = (data) => {
    for(let i = 0; i < data.length; i++) {
        if(data[i] === '(' && data[i + 1] === ')') {
            i++;
        }
        else if(data[i] === '(') {
            let tempStr = data[i];
            let tempIndex = i;
            let numberTrigget = 1;
            let tempResult = 1;
            while(numberTrigget !== 0 && tempIndex < data.length) {
                tempIndex++;
                if(data[tempIndex] === '(' && data[tempIndex + 1] === ')') {
                    tempResult++;
                }
                if(data[tempIndex] === ')') {
                    --numberTrigget;
                    tempStr += data[tempIndex];
                } else if (data[tempIndex] === '(') {
                    ++numberTrigget;
                    tempStr += data[tempIndex];
                }
            }
            result += tempResult;
        }
    }
    console.log(result);
}

divideUnit(data);
