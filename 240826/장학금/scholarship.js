const fs = require('fs')

const [mid, final] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

if (mid < 90 || final < 90) {
    console.log(0)
} else if (final >= 95) {
    console.log(100000)
} else if (final >= 90) {
    console.log(50000)
}