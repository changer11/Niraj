const { error } = require("console");
const fs = require("fs")
const path = require("path")
const directrypath = path.join(__dirname, "files")
console.log(directrypath);
// thrroug loop add many files 
for (i = 0; i < 5; i++) {
    fs.writeFileSync(directrypath + "/hello" + i + ".txt", "this is" + i + "page");
}
// file read process 
fs.readdir(directrypath, (error, files) => {
    files.forEach((item) => {
        console.log(item);
    });
});

