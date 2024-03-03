const http = require('http')
const colors = require('colors')
const data = require("./../../../javascript/import/data.json")
http.createServer((req, res) => {
    for (i = 0; i < data.length; i++) {
        let moviedata = data[i]
        res.write(`
        ${moviedata['title']}
        ${moviedata['averageRating']}
        ${moviedata['actors']}
        ${moviedata['duration']}
        ${moviedata['genres']}
        ${moviedata['imdbRating']}
        ${moviedata['poster']}
        ${moviedata['ratings']}
        ${moviedata['storyline']}${moviedata['year']}
        `);
    }
    res.end();
}).listen(4500);

