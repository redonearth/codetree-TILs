const fs = require('fs')
const [a, b] = fs.readFileSync(0).toString().split(' ')
const max = Math.max(a, b)
const min = Math.min(a, b)

console.log(`${Number(max) - Number(min)}`)