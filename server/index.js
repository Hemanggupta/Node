// const http = require('http');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.send('<h1>HOME PAGE</h1>');
});
app.get('/about', (req, res) => {
  return res.send('<h1>ABOUT PAGE</h1>');
});
app.get('/contact', (req, res) => {
  const { page, size } = req.query;
  return res.send(`<h1>CONTACT PAGE</h1> <br / > <p> Page Number : ${page} and Size : ${size}</p>`);
});

// function myHandler(req, res) {
//   if (req.url === '/favicon.ico') {
//     return res.end();
//   }
//   const log = `${new Date().toISOString()}: ${req.url}\n`;
//   const myUrl = url.parse(req.url, true);
//   console.log(myUrl);
//   fs.appendFile('log.txt', log, (err, data) => {
//     switch (myUrl.pathname) {
//       case '/':
//         res.end('<h1>HOME PAGE</h1>');
//         break;
//       case '/about':
//         res.end('<h1>ABOUT PAGE</h1>');
//         break;
//       case '/contact':
//         const { page, size } = myUrl.query;
//         res.end(`<h1>CONTACT PAGE</h1> <br / > <p> Page Number : ${page} and Size : ${size}</p>`);
//         break;
//       default:
//         res.end('<h1>404 not found!</h1>');
//         break;
//     }
//   });
// }

// const myServer = http.createServer(app);

// myServer.listen(8000, () => console.log('Server started'));

app.listen(8000, console.log('Server listening'));
