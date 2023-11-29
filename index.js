const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hello World");
  } else if (req.url === "/revou") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hello Dunia");
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Salah Url!");
  }
});

const PORT = process.env.PORT || 3000;
const IP = "0.0.0.0";
server.listen(PORT, IP, () => {
  console.log(`Server is running at! http://localhost:3000`);
});
