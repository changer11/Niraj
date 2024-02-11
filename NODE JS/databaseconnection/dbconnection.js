
const { MongoClient } = require("mongodb");
const { default: mongoose } = require("mongoose");
const url =
  "mongodb+srv://Niraj:Changer123@cluster0.tia72jr.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url);
async function dbconnection() {
  let result = await client.connect();
  let data = result.db("Hospital");
   return data
}
module.exports = dbconnection;
