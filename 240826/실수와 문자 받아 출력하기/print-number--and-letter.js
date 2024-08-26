const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
const [c, a, b] = input

console.log(`${c}\n${Number(a).toFixed(2)}\n${Number(b).toFixed(2)}`)