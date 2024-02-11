// const http = require('http')
const data = require("./../../../javascript/import/data.json")
const expresss=require("express")
const app =expresss()
app.use(expresss.json())
app.get("/",(req, res) => {
    // res.writeHead(200, {'content-type': 'movie'});
    res.send(data);
})
app.post("/",(res,req)=>{
    console.log(res.body)
})
app.listen(3000)
