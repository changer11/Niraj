const http = require('http')
const colors=require("colors")
http.createServer((req, res) => {
    res.write
        (`
        <h1>  java</h1>
    <p>For over 2 decades, Java has been the mainstay of app development. It is one of the
    most
    versatile web development tools today and hence popular among app developers.
    Another
    reason for its popularity is its cross-platform and cross-browser compatibility,
    making
    applications written in Java highly portable. These very qualities gave rise to the
    need
    for reusability of code, version control, and other tools for Java developers.
</p>
    `);
    res.end()
}).listen(4200);
http.createServer((req,res)=>{
    res.write('<h1> <a href="http://localhost:4200/">click java</a></h1>');
    res.end()
}).listen(4500);

function data(req,res){
    res.write("hey babes, how are you");
    res.end();
}
http.createServer(data).listen(4100);