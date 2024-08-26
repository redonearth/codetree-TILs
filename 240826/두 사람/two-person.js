const fs = require('fs')

const [A, B] = fs.readFileSync(0).toString().trim().split('\n')

const a = A.split(' ')
const b = B.split(' ')

const aAge = Number(a[0]), aSex = a[1]
const bAge = Number(b[0]), bSex = b[1]

const adult = 19
const man = 'M'

if ((aAge >= adult && aSex === man) || (bAge >= adult && bSex === man)) {
    console.log(1)
} else {
    console.log(0)
}