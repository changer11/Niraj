const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json);
app.use(cors());
app.use(express.Router());
const dbconnection = require("./dbconnection");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Niraj:Changer123@cluster0.tia72jr.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
app.get("/patient", async (req, res) => {
  const patient = (await dbconnection()).collection("Patient");
  const patient_data = await patient.find().toArray();
  res.send(patient_data);
});
app.post("/patient", async (req, res) => {
  const patient = (await dbconnection()).collection("Patient");
  const patient_data = await patient.insertOne(req.body);
  console.log(patient_data);
  console.log(req.body);
});
app.put("/patient", async (req, res) => {
  const patient = (await dbconnection()).collection("Patient");
  const patient_data = await patient.insertOne(req.body);
  console.log(req.body);
});
app.delete("/patient", async (req, res) => {
  const patient = (await dbconnection()).collection("Patient");
  const patient_data = await patient.insertOne(req.body);
  console.log(req.body);
});
app.get("/Doctor", async (req, res) => {
  const Doctor = (await dbconnection()).collection("Doctor");
  const Doctor_data = await Doctor.find().toArray();
  res.send(Doctor_data);
});
app.post("/Doctor", async (req, res) => {
  const Doctor = (await dbconnection()).collection("Doctor");
  const Doctor_data = await Doctor.insertOne(req.body);
  console.log(req.body);
});
app.get("/Appointment", async (req, res) => {
  const Appointment = (await dbconnection()).collection("Appointment");
  const Appointment_data = await Appointment.find().toArray();
  res.send(Appointment_data);
});
app.post("/Appointment", async (req, res) => {
  const Appointment = (await dbconnection()).collection("Appointment");
  const Appointment_data = await Appointment.insertOne(req.body);
  console.log(req.body);
});
app.get("/payment", async (req, res) => {
  const payment = (await dbconnection()).collection("Payment");
  const payment_data = await payment.find().toArray();
  res.send(payment_data);
});
app.post("/payment", async (req, res) => {
  const payment = (await dbconnection()).collection("Payment");
  const payment_data = await payment.insertOne(req.body);
  console.log(req.body);
});
app.get("/room", async (req, res) => {
  const Room = (await dbconnection()).collection("Room");
  const Room_data = await Room.find().toArray();
  res.send(Room_data);
});
app.post("/room", async (req, res) => {
  const Room = (await dbconnection()).collection("Room");
  const Room_data = await Room.insertOne(req.body);
  console.log(req.body);
});
app.get("/Users", async (req, res) => {
  const Users = (await dbconnection()).collection("Users");
  const Users_data = await Users.find().toArray();
  res.send(Users_data);
});
app.post("/Users", async (req, res) => {
  const Users = (await dbconnection()).collection("Users");
  const Users_data = await Users.find().toArray();
  const checkemail = Users_data.find((x) => x.Email == req.body.Email);
  const checkUsername = Users_data.find((x) => x.Username == req.body.Username);
  const checkphone = Users_data.find((x) => x.phone == req.body.phone);
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!checkUsername) {
    if (!checkemail) {
      if (!checkphone) {
        if (emailRegex.test(req.body.Email)) {
          if (emailRegex.test(req.body.Username)) {
            res.status(409).json("Username must be Special Characters");
          } else {
            const Users_res = await Users.insertOne(req.body);
            res.status(409).json("User added Successfully");
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
});

app.listen(4000, console.log("server is runnning on 5000"));
