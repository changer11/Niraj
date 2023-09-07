const data = require("./data.json")
console.log(data);
for (i = 0; i < data.length; i++) {
    let moivedata = data[i];
    console.log("movie no=", i);
    console.log("title=", moivedata["title"]);
    console.log("actors=", moivedata["actors"]);
    console.log("averagerating", moivedata["averageRating"]);
    console.log("durtion=", moivedata["duration"]);
    console.log("genres=", moivedata["genres"]);
    console.log("release date=", moivedata["releaseDate"]);
    console.log("storyline=", moivedata["storyline"]);
    console.log("year=", moivedata["year"]);
    console.log("original title =", moivedata["originalTitle"]);

};