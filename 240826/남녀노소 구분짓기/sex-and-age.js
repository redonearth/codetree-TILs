const fs = require('fs')

const [sex, age] = fs.readFileSync(0).toString().trim().split('\n').map(Number)

const isAdult = age >= 19

if (sex === 0) {
    console.log(isAdult ? 'MAN' : 'BOY')
} else {
    console.log(isAdult ? 'WOMAN' : 'GIRL')
}