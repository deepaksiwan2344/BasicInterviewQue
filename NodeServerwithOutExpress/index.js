const http = require('http');

const server = http.createServer((req, res) => {
  // Set response headers
  res.setHeader('Content-Type', 'text/plain');
  
  // Handling different routes
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello, World!');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end('About page');
  } else {
    res.statusCode = 404;
    res.end('Page not found');
  }
});
console.log("server", server)

const port = 3000;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}); 