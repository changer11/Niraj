import { createSlice } from "@reduxjs/toolkit";
const appointmentslice = createSlice({
  name: "appointment",
  initialState: {},
  reducers: {
    addAppointment(state, action) {
      state["_id"] = action.payload["_id"];
      state["date"] = action.payload["date"];
      state["department"] = action.payload["department"];
      state["doctorname"] = action.payload["doctorname"];
      state["PatientID"] = action.payload["PatientID"];
      state["time"] = action.payload["time"];
      state["problem"] = action.payload["problem"];
      state["Doctorid"] = action.payload["Doctorid"];
    },
  },
});
export default appointmentslice.reducer;
export const { addAppointment } = appointmentslice.actions;
