const fs = require('fs')
const [z, xxxx, yyyy] = fs.readFileSync(0).toString().trim().split('-')

console.log(`${z}-${yyyy}-${xxxx}`)