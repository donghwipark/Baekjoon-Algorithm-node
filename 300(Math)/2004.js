// nCr = n! / r! * (n-r)!


let input = '25 12'.split(' ')
let n = input.shift()
let r = input.shift()

const calculatePower = (n, el) => {
    let count = 0
    while(n >= el) {
        count += parseInt(n / el)
        n /= el
    }
    
    return count
}
let twoPower = calculatePower(n, 2) - calculatePower(r, 2) - calculatePower(n - r, 2)
let fivePower = calculatePower(n, 5) - calculatePower(r, 5) - calculatePower(n - r, 5)
console.log(Math.min(twoPower, fivePower))