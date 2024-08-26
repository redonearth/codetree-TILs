const fs = require('fs')

const n = Number(fs.readFileSync(0).toString().trim())

const cutOff = 80

if (n >= cutOff) {
    console.log('pass')
} else {
    console.log(`${cutOff - n} more score`)
}