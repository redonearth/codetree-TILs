const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

const one = 'John'
const two = 'Tom'
const three = 'Paul'

if (n === 1) {
    console.log(one)
} else if (n === 2) {
    console.log(two)
} else if (n === 3) {
    console.log(three)
} else {
    console.log('Vacancy')
}