const fs = require('fs')

const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

if (a > b) {
    console.log(a * b)
} else {
    console.log(parseInt(b / a))
}