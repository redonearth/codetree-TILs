const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split(' ')
const h = Number(input[0])
const w = Number(input[1])

const bmi = (h, w) => parseInt((10000 * w / (h * h)).toFixed(1))
const b = bmi(h, w)

console.log(b)
if (b >= 25) {
    console.log('Obesity')
}