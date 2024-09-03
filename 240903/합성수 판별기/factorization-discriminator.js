const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

let satisfied = false

for (let i = 2; i < n; i++) {
    if (n % i === 0) {
        satisfied = true
    }
}

console.log(satisfied ? 'C' : 'N')