// path 
const fs=require('fs')
const path=require('path')
const dirname=path.join(__dirname);
// file add process 
fs.writeFileSync("code.text","code step by step");
fs.writeFileSync("hello.text","hello world");
fs.writeFileSync("content.text","readable");
// fs.read files process 
fs.readFileSync()
fs.readdir(dirname,(error,files)=>{
    files.forEach((item)=>{
        console.log(item);
    });
});