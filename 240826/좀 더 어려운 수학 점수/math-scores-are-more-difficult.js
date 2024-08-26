const fs = require('fs')

const [A, B] = fs.readFileSync(0).toString().trim().split('\n')

const [aMath, aEng] = A.split(' ').map(Number)
const [bMath, bEng] = B.split(' ').map(Number)

if (aMath === bMath) {
    console.log(aEng > bEng ? 'A' : 'B')
} else {
    console.log(aMath > bMath ? 'A' : 'B')
}