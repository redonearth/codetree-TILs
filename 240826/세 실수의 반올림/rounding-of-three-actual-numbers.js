const fs = require('fs')
const input = fs.readFileSync(0).toString().split('\n')

const fixNum = (input) => Number(input).toFixed(3)

console.log(`${fixNum(input[0])}\n${fixNum(input[1])}\n${fixNum(input[2])}`)