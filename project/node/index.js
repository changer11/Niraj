const { server} = require("socket.io");
// const express=require("express");
// const app = express();
const io = new server(8000);
io.on("connection", (socket) => {
  console.log("socket connected", socket.id);
});
