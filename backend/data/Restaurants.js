let fs = require('fs')
let path = require('path')
let data = fs.readFileSync(path.join(__dirname,'restaurants.json'))
let jsonData = JSON.parse(data)
module.exports = jsonData