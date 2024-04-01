
const http = require('http');
const fs = require('fs');

let sum = 0;
http.createServer( (req, res) => {
  console.log(`The server worked ${++sum} times`);
  if (req.url === '/') {
    const fileStream = fs.createReadStream('./chunks.txt', {
      encoding: 'utf8',
      //highWaterMark: 10000,
    });
  
    // another way to do the code below considering that res object is a writable stream!!!
    //fileStream.pipe(res);
   
    fileStream.on('data', (chunk) => {
      res.write(chunk);
    });
    fileStream.on('end', () => res.end()) ;
  } else {
    res.end(`<h1>Oops!</h1><h6>This path doesn't exist or you can't access it!</h1>`);
  }
}).listen(5000)



  /*
  // An advanced example of getting chunks using async and the for await of syntax
  let logChunks = async (readable) => {
    for await (const chunk of readable) {
      res.write(chunk);
    }
    res.end();
  }

  const readable = fs.createReadStream('./chunks.txt', {encoding: 'utf8'});
  logChunks(readable);
  */


/*
// The code made chunks.txt
for ( let i = 0 ; i < 10000 ; i++ ) {
  fs.writeFileSync('./chunks.txt', `Hello World ${i}\n`, {flag: 'a'});
}
*/
