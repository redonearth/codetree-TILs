const fs = require('fs')

const temperature = Number(fs.readFileSync(0).toString().trim())

if (temperature < 0) {
    console.log('ice')
} else if (temperature >= 100) {
    console.log('vapor')
} else {
    console.log('water')
}