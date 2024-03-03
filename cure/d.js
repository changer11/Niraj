const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(express.Router());
app.use(cors());
app.get("/", (req, res) => {
  res.json("jdjf");
});
app.listen(1000);
