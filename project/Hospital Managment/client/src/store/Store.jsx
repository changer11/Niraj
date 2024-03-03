import { configureStore } from "@reduxjs/toolkit";
import doctorslice from "./doctor/doctorslice";
import Appointmentslice from "./Appointment/Appointmentslice";
import headerslice from "./headertitle/headerslice";
import patientSlice from "./PatientSlice/PatientSlice";
const store = configureStore({
  reducer: {
    patientdata: patientSlice,
    doctordata: doctorslice,
    appointmentdata: Appointmentslice,
    headerdata: headerslice,
  },
});
export default store;
