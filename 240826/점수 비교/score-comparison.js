const fs = require('fs')

const [A, B] = fs.readFileSync(0).toString().trim().split('\n')

const [aMath, aEng] = A.split(' ').map(Number)
const [bMath, bEng] = B.split(' ').map(Number)

if (aMath > bMath && aEng > bEng) {
    console.log(1)
} else {
    console.log(0)
}