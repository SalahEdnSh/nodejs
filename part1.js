 
// part 1 : GLOBALS
console.log("Hello world!");
console.log(__dirname)
console.log(__filename)
console.log(require)
console.log(module)
console.log(process)
// console.log(process.version)
 
//#################################
// OS Module:
//const os = require("os");
//console.log(os)
//console.log(os.userInfo())
//console.log(os.uptime())
 const currentOS = {
    type: os.type(),
    release: os.release(),
    totalMemory: (os.totalmem()*(10**-6)).toFixed(2)+"GB",
    freeMemory: (os.freemem()*(10**-6)).toFixed(2)+"GB",
}
console.log(currentOS) 
//####################################
// path Module
//const path = require("path");
//console.log(path)
 
console.log(path.sep)
const exemplePath = path.join('folder1', 'folder2', 'text.txt')
console.log(exemplePath)
console.log(path.basename(exemplePath))
console.log(path.resolve(__dirname, 'text.txt'))
 
//##################################
// FS module:
 const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");
writeFileSync('./test.js', 'module.exports = "test test hello world"', {flag: 'a'})
const fileCon = readFileSync('./test.js', 'utf8');
//console.log(fileCon);
//console.log(require(`${__dirname}/test.js`))
writeFile("./test2.js", "//Im the 2nd js file", (err, result) => err ? console.log(err) : console.log('file was made successfully! : '+result))
readFile("./test2.js", "utf8", (err, result)=> err ? console.log(err) : console.log("the file's content : "+result))
 
// http :
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("<h1>hello this is my main page :)</h1>")
    }
      if (req.url == "/about") {
        res.end("<h1>hello this is my about page :)</h1>")
    }

    res.end(`<h1>Oops!</h1><p>It seems this page doesn't exist</p>`)
})

server.listen(5000)











