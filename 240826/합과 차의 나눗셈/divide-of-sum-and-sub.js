const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split(' ')

const a = Number(input[0])
const b = Number(input[1])

const sum = a + b
const diff = a - b

console.log((sum / diff).toFixed(2))