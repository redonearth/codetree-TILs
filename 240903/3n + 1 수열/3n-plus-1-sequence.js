const fs = require('fs')

let N = Number(fs.readFileSync(0).toString().trim())

let cnt = 0

while (true) {
    if (N === 1) {
        console.log(cnt)
        break
    } else if (N % 2 === 0) {
        N /= 2
    } else {
        N = N * 3 + 1
    }
    cnt++
}