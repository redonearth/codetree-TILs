const fs = require('fs')

const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const isEven = (num) => num % 2 === 0
const even = 'even'
const odd = 'odd'

if (isEven(a)) {
    console.log(even)
} else {
    console.log(odd)
}

if (isEven(b)) {
    console.log(even)
} else {
    console.log(odd)
}