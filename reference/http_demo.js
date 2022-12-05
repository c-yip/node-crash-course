const http = require("http");

// Create sever object
http
  .createServer((req, res) => {
    // Write a response
    res.write("Hello world");
    res.end();
  })
  .listen(5000, () => console.log("Server running..."));
