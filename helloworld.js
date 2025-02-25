// hello-world.js
console.log("HELLO WORLD");


// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

// file-system.js
const fs = require('fs');

// Creating the file and writing to it
fs.writeFileSync('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File created and data written');
});

// Reading the file and logging data
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
