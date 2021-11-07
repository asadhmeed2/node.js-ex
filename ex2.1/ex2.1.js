const fs = require('fs')

fs.writeFileSync('text.txt','hi this is my first time writing this file');
fs.copyFileSync('text.txt','copyOfText');
fs.renameSync('text.txt','reNamedFileText')
let fileNames=fs.readdirSync("./")
console.log(fileNames);
fs.appendFileSync('copyOfText',' gogogo to the top')
