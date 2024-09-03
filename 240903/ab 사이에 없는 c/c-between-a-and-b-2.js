const fs = require('fs')

const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let satisfied = true

for (let i = a; i <= b; i++) {
    if (i % c === 0) {
        satisfied = false
    }
}

console.log(satisfied ? 'YES' : 'NO')