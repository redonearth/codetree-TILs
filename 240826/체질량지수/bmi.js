const fs = require('fs')

const [h, w] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

// const bmi = (h, w) => parseInt(((10000 * w) / (h * h)).toFixed(1))
const bmi = (h, w) => parseInt((w / ((h / 100) ** 2)).toFixed(1))
const b = bmi(h, w)

console.log(b)
if (b >= 25) {
    console.log('Obesity')
}