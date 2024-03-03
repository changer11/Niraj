const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://Changer:Niraj123@cluster0.lt5wexw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
async function dbconnection() {
  const result = await client.connect();
  const db = result.db("Practise");
  const collection = await db.collection("Sample");
  return collection;
}
module.exports=dbconnection;
async function getdata() {
  let mongodata = (await dbconnection()).find().toArray();
  let data = await mongodata;
  console.log(data)
  return data;
}
async function insert_data() {
   (await dbconnection()).insertOne({
    username: "niraj",
    role: "develover",
  });
}
async function insertcondition() {
  let data = await getdata();
  if ((data.username = !"niraj")) {
    insert_data();
  } else {
    console.log("data cannot insert because  data is same so,change your data");
  }
}
insertcondition();
async function delete_data() {
  //   (await dbconnection()).deleteOne({"username":"niraj","role":"develover"});
  (await dbconnection()).deleteMany({ username: "niraj", role: "develover" });
}
// delete_data()
