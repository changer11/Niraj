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
const { patientRegister } = require("./mongoose");
const { DoctorRegister } = require("./mongoose");
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
      res.status(449).json("Patient not added Retry 449");
    }
  } catch (e) {
    res.status(404).json("server not found 404");
  }
});
app.put("/patient", async (req, res) => {
  try {
    const usercollection = await Patient();
    const update = await usercollection.updateOne(
      { _id: req.body._id },
      {
        $set: req.body,
      }
    );
    if (req.body.status === "Completed") {
      if (update) {
        res.status(200).json("Approved");
      } else {
        res.status(200).json(" Not Approved try after some time");
      }
    }
    if (req.body.status === "Cancelled") {
      if (update) {
        res.status(200).json("Cancelled");
      } else {
        res.status(200).json("Not Cancelled try after some time");
      }
    }
  } catch (e) {
    res.status(401).json("Server Issue");
  }
});
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
    res.status(404).json("server not found 404");
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
    res.status(404).json("server not found 404");
  }
});
app.put("/Appointment", async (req, res) => {
  try {
    const usercollection = await Appointment();
    const update = await usercollection.updateOne(
      { _id: req.body._id },
      {
        $set: req.body,
      }
    );
    if (req.body.status === "Completed") {
      if (update) {
        res.status(200).json("Approved");
      } else {
        res.status(200).json(" Not Approved try after some time");
      }
    }
    if (req.body.status === "Cancelled") {
      if (update) {
        res.status(200).json("Cancelled");
      } else {
        res.status(200).json("Not Cancelled try after some time");
      }
    }
  } catch (e) {
    res.status(401).json("Server Issue");
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
      res.status(200).json("Payment added successfully");
    } else {
      res.status(200).json("Payment not added");
    }
  } catch (e) {
    res.status(404).json("server not found 404");
    console.log(e)
  }
});
app.put("/payment", async (req, res) => {
  try {
    const usercollection = await payment();
    const update = await usercollection.updateOne(
      { _id: req.body._id },
      {
        $set: req.body,
      }
    );
    if (req.body.status === "Completed") {
      if (update) {
        res.status(200).json("Approved");
      } else {
        res.status(200).json(" Not Approved try after some time");
      }
    }
    if (req.body.status === "Cancelled") {
      if (update) {
        res.status(200).json("Cancelled");
      } else {
        res.status(200).json("Not Cancelled try after some time");
      }
    }
  } catch (e) {
    res.status(401).json("Server Issue");
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
      res.status(200).json("Room Succesfully Added");
    } else {
      res.status(200).json("Room not Added");
    }
  } catch (e) {
    console.log(e);
    res.status(404).json("server not found 404");
  }
});
app.get("/patientusers", async (req, res) => {
  const Users_data = await (await patientRegister()).find();
  res.send(Users_data);
});
app.post("/patientusers", async (req, res) => {
  try {
    const usercollection = await patientRegister();
    const specificuserdata = new usercollection(req.body);
    const Users_data = await usercollection.find();
    const checkemail = Users_data.find((x) => x.Email === req.body.Email);
    const checkUsername = Users_data.find(
      (x) => x.Username === req.body.Username
    );
    const checkphone = Users_data.find((x) => x.phone === req.body.phone);
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(req.body);
    if (!checkUsername) {
      if (!checkemail) {
        if (!checkphone) {
          if (emailRegex.test(req.body.Email)) {
            if (emailRegex.test(req.body.Username)) {
              res.status(409).json("Username must be Special Characters");
            } else {
              const Users_res = await specificuserdata.save();
              if (Users_res) {
                res.status(200).json("patient user succesfully added");
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
    res.status(404).json(JSON.stringify(req.body));
  }
});
app.get("/doctorusers", async (req, res) => {
  const Users_data = await (await DoctorRegister()).find();
  res.send(Users_data);
});
app.post("/doctorusers", async (req, res) => {
  try {
    const usercollection = await DoctorRegister();
    const specificuserdata = new usercollection(req.body);
    const Users_data = await usercollection.find();
    const checkemail = Users_data.find((x) => x.Email === req.body.Email);
    const checkUsername = Users_data.find(
      (x) => x.Username === req.body.Username
    );
    const checkphone = Users_data.find((x) => x.phone === req.body.phone);
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(req.body);
    if (!checkUsername) {
      if (!checkemail) {
        if (!checkphone) {
          if (emailRegex.test(req.body.Email)) {
            if (emailRegex.test(req.body.Username)) {
              res.status(409).json("Username must be Special Characters");
            } else {
              const Users_res = await specificuserdata.save();
              if (Users_res) {
                res.status(200).json("Doctor user succesfully added");
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
    res.status(404).json(JSON.stringify(req.body));
  }
});
app.put("/doctorusers", async (req, res) => {
  try {
    const usercollection = await DoctorRegister();
    const update = await usercollection.updateOne(
      { _id: req.body._id },
      {
        $set: req.body,
      }
    );
    if (req.body.status === "Completed") {
      if (update) {
        res.status(200).json("Approved");
      } else {
        res.status(200).json(" Not Approved try after some time");
      }
    }
    if (req.body.status === "Cancelled") {
      if (update) {
        res.status(200).json("Cancelled");
      } else {
        res.status(200).json("Not Cancelled try after some time");
      }
    }
  } catch (e) {
    res.status(401).json("Server Issue");
  }
});
app.get("/patientLogin", async (req, res) => {
  res.send("dsmd");
});
app.post("/patientLogin", async (req, res) => {
  if (req.body.Username && req.body.password) {
    const patientusercollection = await Register();
    const patientUserData = await patientusercollection.find();
    const check = patientUserData.find(
      (x) =>
        x.Username === req.body.Username && x.password === req.body.password
    );
    if (check) {
      res.status(200).json("logged In");
    } else {
      res.status(401).json("no record found  You have to create account");
    }
  }
});
app.get("/DotorLogin", async (req, res) => {
  res.send("dsmd");
});
app.post("/DoctorLogin", async (req, res) => {
  if (req.body.Username && req.body.password) {
    const Doctorusercollection = await DoctorRegister();
    const DoctorUserData = await Doctorusercollection.findOne(
      req.body.Email && req.body.Username
    );
    if (DoctorUserData) {
      const status = DoctorUserData["status"];
      if (status === "Approved") {
        res.status(200).json("logged In");
      } else {
        res.status(403).json(`Your Account status is ${status}`);
      }
    } else {
      res.status(401).json("no record found  You have to create account");
    }
  }
});
app.post("/AdminLogin", async (req, res) => {
  if (req.body.Username && req.body.password) {
    let check = () => {
      return (
        req.body.Username === "Changer" && req.body.password === "Changer@123"
      );
    };
    console.log(check());
    if (check()) {
      res.status(200).json("Admin mode logged In");
    } else {
      res
        .status(401)
        .json("no record found  You have to contact to administrator");
    }
  }
});
app.listen(4000, console.log("server is runnning on 4000"));
