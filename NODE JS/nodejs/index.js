const express = require("express");
const app = express();
const fs = require("fs");
const http = require("http");
// fs.writeFileSync("index.html", "<h1>hello</h1>");
http
  .createServer((req, res) => {
    fs.readFile("index.html", (err, files) => {
      res.write(files);
      res.end();
    });
  })
  .listen(4500);
app.get("/about", (req, res) => {
  fs.readFile("index.html", (err, files) => {
    res.send(files);
  });
});
app.listen(3000);
