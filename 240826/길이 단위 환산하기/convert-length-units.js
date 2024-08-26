const fs = require('fs')
const n = Number(fs.readFileSync(0).toString())
const ft = 30.48

console.log((n * ft).toFixed(1))