// Import the http module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Write the response content
  res.write('Hello, this is a simple Node.js server!');

  // End the response
  res.end();
});

// Start the server on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Server is running at http://127.0.0.1:3000/');
});
