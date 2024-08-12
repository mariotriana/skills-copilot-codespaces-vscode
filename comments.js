// Create web server
// Create a web server that listens for requests on port 3000 and responds with the comments data. 
// The comments data is an array of objects, each with a name and message property. 
// The server should respond with the comments data in JSON format.
// Test the server by visiting http://localhost:3000 in your web browser.

import { createServer } from 'http';
import comments from './comments';

const server = createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(JSON.stringify(comments));
});

server.listen(3000, 'localhost', () => {
  console.log('Server listening on port 3000');
});

