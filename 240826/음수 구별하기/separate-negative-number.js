const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()
const n = Number(input)

console.log(n)
if (n < 0) console.log('minus')