const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

input.sort((a, b) => a - b)

console.log(input[1])