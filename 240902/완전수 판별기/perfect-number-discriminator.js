const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

let sum = 0

for (let i = 1; i < n; i++) {
    if (n % i === 0) {
        sum += i
    }
}

console.log(sum === n ? 'P' : 'N')