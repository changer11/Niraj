const { isUtf8 } = require("buffer");
const fs = require("fs")
// path location 
const path = require("path")
// directory location 
const dirpath = path.join(__dirname,"crud")
console.log(dirpath);
// add files process 
const files=`${dirpath}/apple.text`;
fs.writeFileSync(files,"this is apple");
// read process
fs.readFile(files,"Utf8",(err,fil)=>{
    console.log(fil);
})
// add text in files 
fs.appendFile(files,"\nthis is very sweet",(error)=>{
       if(!error){
        console.log("file updated");
       }
})
// rename file process 
fs.rename(files,`${dirpath}/fruit.text`,(err)=>{
    if(!err){
        console.log("file updated");
    }
});
// delete file process 
// fs.unlinkSync(`${dirpath}/fruit.text`,(err)=>{
//     if(!err){
//         console.log("fileupdated");
//     }
// });