const { log } = require('console');
const fs = require('fs');
const os = require('os');

// Sync
fs.writeFileSync('./test.txt', 'Hey there');
const content = fs.readFileSync('./contact.txt', 'utf8');
console.log(content);

//Async
fs.writeFile('./test.txt', 'Hello Async', err => {});
fs.readFile('./contact.txt', 'utf-8', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Async :', res);
  }
});

console.log(os.cpus().length);
