console.log('welcome to Node.js');

let os = require('os');
var freeMemory = os.freemem();
var cpus = os.cpus().length;

var fs = require('fs');

console.log(freeMemory, cpus);

var { readFile, unlink } = require('fs');

var buff1 = Buffer.alloc(12);
var buff2 = Buffer.allocUnsafe(12);

buff1.write('welcome to India');

console.log(buff1);
console.log(buff2);
console.log(buff1.toString());

// sync

console.log('task');
console.time('task1');

for (let i = 0; i < 100000; i++) {}
console.timeEnd('task1');
console.log('task end');

// async

console.log('task async');

console.time('task1');
setTimeout(() => {
  console.log('Timeout');
}, 0);
console.timeEnd('task1');

fs.readFile(`./test.md`, `utf-8`, (err, cont) => {
  console.log(cont.toString());
});
