const fs = require('fs')
const [h, m] = fs.readFileSync(0).toString().split(':')

console.log(`${Number(h) + 1}:${m}`)