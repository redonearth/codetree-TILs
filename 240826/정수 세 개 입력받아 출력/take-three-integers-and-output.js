const fs = require('fs')
const input = fs.readFileSync(0).toString().split('\n')

const [a, b] = input.at(0).split(' ')
const c = input.at(-1)

console.log(Number(a), Number(b), Number(c))