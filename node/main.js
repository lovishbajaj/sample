var fs = require('fs')
// const v = require('random-name')
var name1 = require('./name2')
fs.appendFile('name.txt',name1.lov(), (err)=> {
    if(err){
    console.log('err')}
})
// console.log(name1())