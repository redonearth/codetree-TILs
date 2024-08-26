const fs = require('fs')

const a = Number(fs.readFileSync(0).toString().trim())

const yes = 'YES'
const no = 'NO'

if (a % 3 === 0) {
    console.log(yes)
} else {
    console.log(no)
}

if (a % 5 === 0) {
    console.log(yes)
} else {
    console.log(no)
}