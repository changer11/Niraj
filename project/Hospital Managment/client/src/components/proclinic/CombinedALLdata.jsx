import React from "react";
import { Route, Routes } from "react-router-dom";
import AddAppointments from "./Appointments/AddAppointments";
import AllAppointments from "./Appointments/AllAppointments";
import AppointmentDetail from "./Appointments/AppointmentDetail";
import EditAppointment from "./Appointments/EditAppointments";
import Dashboard from "./dashboard/Dashboard";
import Addpatient from "./patients/Addpatient";
import EditPatient from "./patients/EditPatient";
import Allpatient from "./patients/Allpatient";
import AddPayement from "./payments/AddPayment";
import AllPayment from "./payments/AllPayment";
import PaymentInvoice from "./payments/PaymentInvoice";
import AddDoctor from "./Doctor/AddDoctor";
import AllDoctor from "./Doctor/AllDoctor";
import DoctorDetails from "./Doctor/Doctordetails";
import EditDoctor from "./Doctor/EditDoctor";
import AddRoom from "./RoomAllotments/AddRoomAllotment";
import AllRooms from "./RoomAllotments/AllRooms";
import EditRoomAllotmment from "./RoomAllotments/EditRoomAlllotment";
import Tables from "./tables/Tables";
import MorrisChart from "./Chart/Morris";
import FloatChart from "./Chart/Flot";
import Forms from "./Form/Forms";
import FontAwesome from "./Icons/FontAwesome";
import Themify from "./Icons/Themify";
import File_404 from "./Otherpages/404";
import BlankPage from "./Otherpages/BlankPage";
import Faq from "./Otherpages/Faq";
import Invoice from "./Otherpages/Invoice";
import Pricing from "./Otherpages/Pricing";
import PatientDetail from "./patients/PatientDetail";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { motion } from "framer-motion";
import Login from "./Otherpages/Login";
import SignUp from "./Otherpages/SignUp";
import Verifypatient from "./patients/Verifypatient";
import Verifyappointment from "./Appointments/Verifyappointment";
import Verifypayment from "./payments/VerifyPayment";
import VerifyDoctor from "./Doctor/VerifyDoctor";

const CombinedAlldata = ({ setloginmode }) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div variants={fadeIn("top", "spring", 1 * 0.5, 10)}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Addpatient" element={<Addpatient />} />
          <Route path="/EditPatient" element={<EditPatient />} />
          <Route path="/Allpatient" element={<Allpatient />} />
          <Route path="/PatientDetail" element={<PatientDetail />} />
          <Route path="/AddDoctor" element={<AddDoctor />} />
          <Route path="/AllDoctors" element={<AllDoctor />} />
          <Route path="/DoctorDetail" element={<DoctorDetails />} />
          <Route path="/EditDoctor" element={<EditDoctor />} />
          <Route path="/AddAppointment" element={<AddAppointments />} />
          <Route path="/AllAppointment" element={<AllAppointments />} />
          <Route path="/AppointmentDetail" element={<AppointmentDetail />} />
          <Route path="/EditAppointment" element={<EditAppointment />} />
          <Route path="/AddPayment" element={<AddPayement />} />
          <Route path="/AllPayment" element={<AllPayment />} />
          <Route path="/Paymentinvoice" element={<PaymentInvoice />} />
          <Route path="/AddRoom" element={<AddRoom />} />
          <Route path="/AllRoom" element={<AllRooms />} />
          <Route path="/EditRoomAlllotment" element={<EditRoomAllotmment />} />
          <Route path="/Tables" element={<Tables />} />
          <Route path="/FloatChart" element={<FloatChart />} />
          <Route path="/MorrisChart" element={<MorrisChart />} />
          <Route path="/Form" element={<Forms />} />
          <Route path="/FontAwesome" element={<FontAwesome />} />
          <Route path="/Themify" element={<Themify />} />
          <Route path="/404" element={<File_404 />} />
          <Route path="/BlankPage" element={<BlankPage />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Invoice" element={<Invoice />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route
            path="/Login"
            element={<Login setloginmode={setloginmode} />}
          />
          <Route
            path="/SignUp"
            element={<SignUp setloginmode={setloginmode} />}
          />
          <Route path="/VerifyDoctor" element={<VerifyDoctor />} />
          <Route path="/Verifypatient" element={<Verifypatient />} />
          <Route
            path="/Verifyappointment"
            exact
            element={<Verifyappointment />}
          />
          <Route path="/Verifypayment" element={<Verifypayment />} />
        </Routes>
      </motion.div>
    </motion.section>
  );
};
export default CombinedAlldata;
