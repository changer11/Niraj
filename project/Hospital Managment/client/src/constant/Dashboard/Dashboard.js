const DashboardDetail = [
  {
    icon: "fa fa-user-o",
    title: "Patients",
    Total: "348",
    color: "rgb(229,116,152)",
    status: {
      icon: "fa fa-angle-up",
      percentage_no: "+20%",
      percentage_status: "increased",
    },
  },
  {
    icon: "fa fa-bar-chart",
    title: "Appointments",
    Total: "1585",
    color: "rgb(85,179,122)",
    status: {
      icon: "fa fa-angle-down",
      percentage_no: "-15%",
      percentage_status: "Decreased",
    },
  },
  {
    icon: "fa fa-dollar",
    title: "Total Revenue",
    Total: "$7300",
    color: "rgb(229,116,152)",
    status: {
      icon: "fa fa-angle-up",
      percentage_no: "+10%",
      percentage_status: "Increased",
    },
  },
];
const PatientDetails = [
  {
    patient_Name: "Rajesh",
    Doctor: "Manoj Kumar",
    Check_up: "Dental",
    Date: "12-10-2018",
    Time: "12:10 PM",
    status: "Cancel",
  },
  {
    patient_Name: "Rajesh",
    Doctor: "Manoj Kumar",
    Check_up: "Dental",
    Date: "12-10-2018",
    Time: "12:10 PM",
    status: "pending",
  },
  {
    patient_Name: "Rajesh",
    Doctor: "Manoj Kumar",
    Check_up: "Dental",
    Date: "12-10-2018",
    Time: "12:10 PM",
    status: "Completed",
  },
  {
    patient_Name: "Rajesh",
    Doctor: "Manoj Kumar",
    Check_up: "Dental",
    Date: "12-10-2018",
    Time: "12:10 PM",
    status: "Completed",
  },
  {
    patient_Name: "Rajesh",
    Doctor: "Manoj Kumar",
    Check_up: "Dental",
    Date: "12-10-2018",
    Time: "12:10 PM",
    status: "Completed",
  },
  {
    patient_Name: "Rajesh",
    Doctor: "Manoj Kumar",
    Check_up: "Dental",
    Date: "12-10-2018",
    Time: "12:10 PM",
    status: "Completed",
  },
];
const Doctor_speciality=[
  {
    Doctor_name: "Manoj Kumar",
    Speciality: "Dental",
    Availability:"Available"
  },
  {
    Doctor_name: "Manoj Kumar",
    Speciality: "Dental",
    Availability:"Available"
  },
  {
    Doctor_name: "Manoj Kumar",
    Speciality: "Dental",
    Availability:"Available"
  },
  {
    Doctor_name: "Manoj Kumar",
    Speciality: "Dental",
    Availability:"Not Available"
  },
  {
    Doctor_name: "Manoj Kumar",
    Speciality: "Dental",
    Availability:"On Leave"
  },
]
export { DashboardDetail,PatientDetails,Doctor_speciality };
