const fs = require('fs')
const [n, m] = fs.readFileSync(0).toString().split(' ')

console.log(Number(n) * Number(m))