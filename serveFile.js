var http = require('http');
var url = require('url');
var fs = require('fs');//use for read write and update

/* Reads the file at the given path and serves it to the client. The
 * Content-Type header will be set to the provided contentType. */
function readAndServe(path, contentType, response) 
{
  fs.readFile(path, function(error, data) {
    if (error) {
      throw error;
    }
   // console.log(response);
    response.writeHead(200, {'Content-type': contentType});
    response.write(data);
    response.end();
  });
}


/* Serves files for the task list, and provides routes to create/delete tasks. */
http.createServer(function(request, response) 
{
  var pathname = url.parse(request.url).pathname;
console.log(url.parse(request.url));
  if (request.method === "GET") {
    if (pathname === "/") {
      readAndServe('my manage-products.html', 'text/html', response);
    }
    else {
      response.end();
    }
  } 
  else {
    response.end();
  }
}).listen(8000, '127.0.0.1');

console.log('Running on 127.0.0.1:8000');
