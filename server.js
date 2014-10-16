var http = require("http"); 
var url = require("url");
var path = require("path");
var fs = require("fs");

// Specify the port to use, default is 3000
var port = process.argv[2] || 3000;

// Create server
http.createServer(function(request, response) {
  
  var uri = url.parse(request.url).pathname, filename = path.join(process.cwd(), uri);

  fs.exists(filename, function(exists) {
    
    if (!exists) {
      response.writeHead(404, {"Content-Type": "text/html"});
      response.write("404 Not Found\n");
      response.end();
      return;
    }

    // Default static HTML file to load
    if (fs.statSync(filename).isDirectory()) filename += 'index.html';

    fs.readFile(filename, "binary", function(err, file) {
      
      if (err) {        
        response.writeHead(500, {"Content-Type": "text/html"});
        response.write(err + "\n");
        response.end();
        return;
      }

      response.writeHead(200);
      response.write(file, "binary");
      response.end();
      
    });
    
  });
  
}).listen(parseInt(port, 10));

console.log("Server running at http://127.0.0.1:" + port + "/\nCTRL + C to shutdown");
