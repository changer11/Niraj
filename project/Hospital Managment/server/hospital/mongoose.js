const mongoose = require("mongoose");
async function MGConnection() {
  const url =
    "mongodb+srv://Niraj:Changer123@cluster0.tia72jr.mongodb.net/Hospital?retryWrites=true&w=majority";
  mongoose.connection["Hospital"];
  return await mongoose.connect(url, {
    dbName: "Hospital",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
async function Appointment() {
  const Appointment_Schema = new mongoose.Schema({
    PatientId: { type: String, required: true },
    department: { type: String, required: true },
    doctorname: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    token: { type: String, required: true },
    problem: { type: String, required: true },
    status: {
      type: String,
      enum: ["Pending", "Completed", "Cancelled"],
      default: "Pending",
    },
  });

  const Appointment_Collection =
    (await MGConnection()).models.appointments ||
    (await MGConnection()).model("appointments", Appointment_Schema);
  return Appointment_Collection;
}
async function Patient() {
  const patient_Schema = new mongoose.Schema({
    Name: { type: String, required: true },
    dob: { type: Date, required: true },
    age: { type: Number, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    file: { type: String, required: true },
    status: {
      type: String,
      enum: ["Pending", "Completed", "Cancelled"],
      default: "Pending",
    },
  });
  const patient_Collection =
    (await MGConnection()).models["patients"] ||
    (await MGConnection()).model("patients", patient_Schema);
  return patient_Collection;
}
async function Doctor() {
  const Doctor_Schema = new mongoose.Schema({
    username: { type: String, required: true },
    gender: { type: String, required: true },
    experience: { type: Number, required: true },
    specialization: { type: String, required: true },
    dob: { type: Date, required: true },
    age: { type: Number, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    doctordetail: { type: String, required: true },
    Availability: {
      type: String,
      enum: ["on Leave", "Not Available", "Available"],
      default: "Not Available",
    },
    file: { type: String, required: true },
  });
  const Doctor_Collection =
    (await MGConnection()).models["doctors"] ||
    (await MGConnection()).model("doctors", Doctor_Schema);
  return Doctor_Collection;
}
async function payment() {
  const payment_Schema = new mongoose.Schema({
    PatientID: { type: String, required: true },
    patient_Name: { type: String, required: true },
    Department: { type: String, required: true },
    Doctor_Name: { type: String, required: true },
    Admission_Date: { type: Date, required: true },
    Discharge: { type: Date, required: true },
    service: {
      serviceName: { type: Object, required: true },
      cost: { type: Object, required: true },
    },
    payment: {
      discount: { type: Number },
      type: { type: String, required: true },
      advancePaid: { type: Number, default: 0 },
      cardCheckNumber: { type: Number },
    },
    status: {
      type: String,
      enum: ["Pending", "Completed", "Cancelled"],
      default: "Pending",
    },
  });
  const paymrnt_Collection =
    (await MGConnection()).models["payments"] ||
    (await MGConnection()).model("payments", payment_Schema);
  return paymrnt_Collection;
}
async function Room() {
  const Room_Schema = new mongoose.Schema({
    RoomNumber: { type: Number, required: true },
    RoomType: { type: String, required: true },
    Patient_Name: { type: String, required: true },
    Allotment_Date: { type: Date, required: true },
    Discharge_Date: { type: Date, required: true },
    Doctor_Name: { type: String, required: true },
  });
  const Room_Collection =
    (await MGConnection()).models["rooms"] ||
    (await MGConnection()).model("rooms", Room_Schema);
  return Room_Collection;
}

async function patientRegister() {
  const user_Schema = new mongoose.Schema({
    Username: { type: String, required: true },
    password: { type: String, required: true },
    Email: { type: String, required: true },
    phone: { type: Number, required: true },
  });
  const user_Collection =
    (await MGConnection()).models["patientusers"] ||
    (await MGConnection()).model("patientusers", user_Schema);
  return user_Collection;
}
async function DoctorRegister() {
  const user_Schema = new mongoose.Schema({
    Username: { type: String, required: true },
    password: { type: String, required: true },
    Email: { type: String, required: true },
    phone: { type: Number, required: true },
    Doctordegree: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ["Pending", "Cancelled", "Approved"],
      default: "Pending",
    },
  });
  const user_Collection =
    (await MGConnection()).models["doctorusers"] ||
    (await MGConnection()).model("doctorusers", user_Schema);
  return user_Collection;
}
function Login() {
  const login_schema = new mongoose.Schema({
    Username: { type: String, required: true },
    password: { type: String, required: true },
  });
  const login_collection = await(
    MGConnection().models["login"] || mongoose.model("login", login_schema)
  );
}
module.exports = {
  Appointment,
  Patient,
  Doctor,
  payment,
  Room,
  patientRegister,
  DoctorRegister,
};
