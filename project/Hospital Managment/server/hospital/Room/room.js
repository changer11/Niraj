const express = require("express");
const { Room } = require("../mongoose");
const router = express.Router();
const { fetchuser } = require("./../middlware/fetchuser");
router.get("/", async (req, res) => {
  let room_collection = await Room();
  let room_data = await room_collection.find();
  res.send(room_data);
});
router.post("/", fetchuser, async (req, res) => {
  try {
    let result = Room();
    let room_collection = await result;
    let room_data = await room_collection({
      userid: req.users._id,
      ...req.body,
    });
    let room_save = await room_data.save();
    if (room_save) {
      res.status(200).json("Room Succesfully Added");
    } else {
      res.status(200).json("Room not Added");
    }
  } catch (e) {
    console.log(e);
    res.status(404).json("server not found 404");
  }
});
module.exports = router;
