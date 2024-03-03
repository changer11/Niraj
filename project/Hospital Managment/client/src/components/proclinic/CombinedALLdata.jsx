import React, { useEffect, useMemo, useState } from "react";
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
import Verifypatient from "./patients/Verifypatient";
import Verifyappointment from "./Appointments/Verifyappointment";
import Verifypayment from "./payments/VerifyPayment";
import VerifyDoctor from "./Doctor/VerifyDoctor";
import Login from "./Registration/Login";
import SignUp from "./Registration/SignUp";
import Accountdetails from "./useraccount/accountdetails";
import Private, {
  Private_Com_for_Admin,
  Private_Com_for_Doc_Ad,
} from "./private/Private";
import ForgetPassword from "./Registration/ForgetPassword";
const CombinedAlldata = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div variants={fadeIn("top", "spring", 1 * 0.5, 10)}>
        <Routes>
          <Route element={<Private />}>
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Patient/Addpatient" element={<Addpatient />} />
              <Route path="/Patient/EditPatient" element={<EditPatient />} />
              <Route path="/Patient/Allpatient" element={<Allpatient />} />
              <Route
                path="/Patient/PatientDetail"
                element={<PatientDetail />}
              />
              <Route element={<Private_Com_for_Doc_Ad />}>
                <Route path="/Doctor/AddDoctor" element={<AddDoctor />} />
                <Route path="/Doctor/EditDoctor" element={<EditDoctor />} />
                <Route
                  path="/Verifyappointment"
                  exact
                  element={<Verifyappointment />}
                />
              </Route>
              <Route path="/Doctor/AllDoctors" element={<AllDoctor />} />
              <Route path="/Doctor/DoctorDetail" element={<DoctorDetails />} />
              <Route
                path="/Appointment/AddAppointment"
                element={<AddAppointments />}
              />
              <Route
                path="/Appointment/AllAppointment"
                element={<AllAppointments />}
              />
              <Route
                path="/Appointment/AppointmentDetail"
                element={<AppointmentDetail />}
              />
              <Route
                path="/Appointment/EditAppointment"
                element={<EditAppointment />}
              />
              <Route path="/Payment/AddPayment" element={<AddPayement />} />
              <Route path="/Payment/AllPayment" element={<AllPayment />} />
              <Route
                path="/Payment/Paymentinvoice"
                element={<PaymentInvoice />}
              />
              <Route path="/Room/AddRoom" element={<AddRoom />} />
              <Route path="/Room/AllRoom" element={<AllRooms />} />
              <Route
                path="/Room/EditRoomAlllotment"
                element={<EditRoomAllotmment />}
              />
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
              <Route path="/user/account/detail" element={<Accountdetails />} />
              <Route element={<Private_Com_for_Admin />}>
                <Route path="/VerifyDoctor" element={<VerifyDoctor />} />
                <Route path="/Verifypatient" element={<Verifypatient />} />
                <Route path="/Verifypayment" element={<Verifypayment />} />
              </Route>
            </>
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/forgot/password" element={<ForgetPassword />} />
        </Routes>
      </motion.div>
    </motion.section>
  );
};
export default CombinedAlldata;
