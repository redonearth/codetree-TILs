const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

let classroom = 0, passage = 0, bathroom = 0

for (let i = 1; i <= n; i++) {
    if (i % 12 === 0) bathroom++
    else if (i % 3 === 0) passage++
    else if (i % 2 === 0) classroom++
    
}

console.log(`${classroom} ${passage} ${bathroom}`)