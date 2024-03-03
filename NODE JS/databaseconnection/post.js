const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const dbconnection = require("./dbconnection");
app.get("/", async (req, res) => {
  const dta = await (await dbconnection()).find().toArray();
  res.send(dta);
  console.log(dta)
});
app.post("/", async (req, res) => {
  console.log(req.body);
  const dta = await (await dbconnection()).deleteMany();
  res.send(dta);
  console.log(dta)
});
app.listen(2000, () => {
  console.log("Server is running on port 2000");
});
