const http = require('http')
const data = require("./../../javascript/import/data.json")
http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'movie'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(4600);