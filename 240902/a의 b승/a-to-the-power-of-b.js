const fs = require('fs')

const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let prod = 1

for (let i = 0; i < b; i++) {
    prod *= a
}

console.log(prod)