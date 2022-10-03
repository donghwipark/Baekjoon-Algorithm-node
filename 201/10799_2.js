// ()(((()())(())()))(()) 17
// (((()(()()))(())()))(()()) 24

let data = '(((()(()()))(())()))(()())';
let unit = [];
let result = 0;

const divideUnit = (data) => {
    for(let i = 0; i < data.length; i++) {
        if(data[i] === '(') {
            let tempStr = data[i];
            let tempIndex = i;
            let numberTrigget = 1;
            while(numberTrigget !== 0 && tempIndex < data.length) {
                tempIndex++;
                if(data[tempIndex] === ')') {
                    --numberTrigget;
                    tempStr += data[tempIndex];
                } else if (data[tempIndex] === '(') {
                    ++numberTrigget;
                    tempStr += data[tempIndex];
                }
            }
            unit.push(tempStr);
        }
    }
}

const laserCutOuputNumber = () => {
    unit.map((el) => {
        if(el !== '()') {
            result += el.split('()').length;
        }
    })
    console.log(result);
}

divideUnit(data);
laserCutOuputNumber();