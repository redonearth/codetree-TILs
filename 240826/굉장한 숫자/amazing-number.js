const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

const isAmazingNumber = (x) => (x % 2 !== 0 && x % 3 === 0) || (x % 2 === 0 && x % 5 === 0)

console.log(isAmazingNumber(n) ? 'true' : 'false')