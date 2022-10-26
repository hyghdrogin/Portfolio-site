const http = require("http");
const fs = require("fs");

const port = 8000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(data);
      res.end();
    });
    } else if (req.url === "/about") {
        fs.readFile("about.html", (err, data) => {
            if (err) throw err;
            res.writeHead(200, {
              "Content-Type": "text/html",
            });
            res.write(data);
            res.end();
          });
    } else if (req.url === "/contact") {
        fs.readFile("contact.html", (err, data) => {
            if (err) throw err;
            res.writeHead(200, {
              "Content-Type": "text/html",
            });
            res.write(data);
            res.end();
          });
    } else {
        fs.readFile("error.html", (err, data) => {
            if (err) throw err;
            res.writeHead(200, {
              "Content-Type": "text/html",
            });
            res.write(data);
            res.end();
          });
    }
});

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
