const express = require("express");
const app = express();
app.use(express.json());
const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://Changer:Niraj123@cluster0.lt5wexw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
async function dbconnection() {
  let result = await client.connect();
  let db = result.db("Practise");
  let collection = db.collection("Sample");
  return collection;
}
let data;
async function getdata() {
  let mongodata = (await dbconnection()).find().toArray();
  data = await mongodata;
}
getdata();
app.get("/", async (req, res) => {
  res.send(data);
});

app.post("/", async(req, res) => {
  console.log(req.body);
(await dbconnection()).insertOne(req.body);
res.send(req.body)
});

app.listen(5000);