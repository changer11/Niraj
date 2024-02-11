const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.Router());
const { Appointment } = require("./mongoose");
const { Patient } = require("./mongoose");
const { Doctor } = require("./mongoose");
const { payment } = require("./mongoose");
const { Room } = require("./mongoose");
const { Register } = require("./mongoose");

app.get("/patient", async (req, res) => {
  const patient_data = await (await Patient()).find();
  res.send(patient_data);
});
app.post("/patient", async (req, res) => {
  try {
    const patient_Collection = await Patient();
    const patient_data = new patient_Collection(req.body);
    const save = await patient_data.save();
    if (save) {
      res.status(200).json("Patient added successfully");
    } else {
      res.status(449).json("Patient not added Retry");
    }
  } catch (e) {
    res.status(404).json("server not found ");
  }
});
app.put("/patient", async (req, res) => {});
app.delete("/patient", async (req, res) => {});
app.get("/Doctor", async (req, res) => {
  const Doctor_Collection = await Doctor();
  const doctor = await Doctor_Collection.find();
  res.send(doctor);
});
app.post("/Doctor", async (req, res) => {
  try {
    const Doctor_Collection = await Doctor();
    const doctor = new Doctor_Collection(req.body);
    const save = await doctor.save();
    if (save) {
      res.status(200).json("Doctor added Successfully");
    } else {
      res.status(449).json("Doctor  not added retry");
    }
  } catch (e) {
    res.status(404).json("server not found ");
  }
});
app.get("/Appointment", async (req, res) => {
  const appointmentdata = await (await Appointment()).find();
  res.send(appointmentdata);
});
app.post("/Appointment", async (req, res) => {
  try {
    const Appointment_Collection = await Appointment();
    const appointmentdata = new Appointment_Collection(req.body);
    const save = await appointmentdata.save();
    if (save) {
      res.status(200).json("Appointment added Successfuly");
    } else {
      res.status(449).json("Appointment not  added retry");
    }
  } catch (e) {
    res.status(404).json("server not found ");
  }
});
app.get("/payment", async (req, res) => {
  const result = payment();
  const payment_Collection = await result;
  const payment_data = await payment_Collection.find();
  res.send(payment_data);
});
app.post("/payment", async (req, res) => {
  try {
    const result = payment();
    const payment_Collection = await result;
    const payment_data = new payment_Collection(req.body);
    const save = await payment_data.save();
    if (save) {
      res.status(200).json("Registration success");
    } else {
      res.status(200).json("Registration not success");
    }
  } catch (e) {
    res.status(404).json("server not found ");
  }
});
app.get("/room", async (req, res) => {
  let room_collection = await Room();
  let room_data = await room_collection.find();
  res.send(room_data);
});
app.post("/room", async (req, res) => {
  try {
    let result = Room();
    let room_collection = await result;
    let room_data = await room_collection(req.body);
    let room_save = await room_data.save();
    if (room_save) {
      res.status(200).json("Registration success");
    } else {
      res.status(200).json("Registration not success");
    }
  } catch (e) {
    res.status(404).json("server not found ");
  }
});
app.get("/Users", async (req, res) => {
  const Users_data = await (await Register()).find();
  res.send(Users_data);
});
app.post("/Users", async (req, res) => {
  try {
    const usercollection = await Register();
    const specificuserdata = new usercollection(req.body);
    const Users_data = await usercollection.find();
    const checkemail = Users_data.find((x) => x.Email === req.body.Email);
    const checkUsername = Users_data.find(
      (x) => x.Username === req.body.Username
    );
    const checkphone = Users_data.find((x) => x.phone === req.body.phone);
    console.log(checkphone);
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!checkUsername) {
      if (!checkemail) {
        if (!checkphone) {
          if (emailRegex.test(req.body.Email)) {
            if (emailRegex.test(req.body.Username)) {
              res.status(409).json("Username must be Special Characters");
            } else {
              const Users_res = await specificuserdata.save();
              if (Users_res) {
                console.log(Users_res);
                res.status(200).json("User added Successfully");
              }
            }
          } else {
            res.status(409).json("please enter a valid email id");
          }
        } else {
          res.status(409).json("PhoneNumber already exists!");
        }
      } else {
        res.status(409).json("Emailid already exists!");
      }
    } else {
      res.status(409).json("Username already exists!");
    }
  } catch (e) {
    res.status(404).json("server not found ");
  }
});
app.post("/Login", async (req, res) => {
  if (req.body.Email && req.body.Username && req.body.password) {
    const usersdata = new usercollection.findOne(req.body);
    res.send(usercollection);
    if (usersdata) {
      res.status(200).send(usersdata);
    } else {
      res.status(401).send("Invalid Credentials");
    }
  }
});
app.get("/", (req, res) => {
  res.send("ddj");
});
app.listen(4000, console.log("server is runnning on 4000"));
