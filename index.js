const http = require("http");
const fs = require("fs");

const port = 8000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/" ) {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      return res.end();
    });
    }
    if (req.url === "/about" && method === "GET") {
        fs.readFile("about.html", (err, data) => {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            return res.end();
          });
    }
    if (req.url === "/contact" && method === "GET") {
        fs.readFile("contact.html", (err, data) => {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            return res.end();
          });
    }
    fs.readFile("error.html", (err, data) => {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        return res.end();
    });
});

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
