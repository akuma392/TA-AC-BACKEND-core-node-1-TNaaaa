let fs = require('fs');
let path = require('path');

// let filePath = path.join(__dirname, content.md);

fs.readFile(`./content.md`, (err, content) => {
  console.log(err, content.toString());
});

var buff1 = Buffer.alloc(10);
console.log(buff1);
buff1.write('welcome to Node.js');

console.log(buff1.toString());
