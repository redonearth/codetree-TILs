const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

let isPrime = true

for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
        isPrime = false
    }
}

console.log(isPrime ? 'P' : 'C')