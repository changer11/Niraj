import { React } from "react";
import {
  DashboardDetail,
  Doctor_speciality,
  PatientDetails,
} from "../../../constant/Dashboard/Dashboard";
import LineChart from "./LineChart";
import PloatChart from "./ploty";
import PieChart from "./Piechart";

const Dashboard = () => {
  return (
    <>
      <div className="xl:m-5 sm:m-0 max-sm:p-2">
        <div className="flex xl:justify-between flex-wrap justify-center ">
          {DashboardDetail.map(({ icon, title, status, color, Total }) => (
            <div
              className="flex items-center  xl:w-[330px] h-[130px] w-[100%] border border-spacing-4  flex-wrap justify-around max-sm:mt-4 bg-[rgb(255,255,255)] rounded-sm"
              key={icon}
            >
              <div>
                <span style={{ color: color }}>
                  <i
                    className={`${icon} text-5xl h-[70px] w-[70px] outline outline-2 outline-[${color}] rounded-full flex justify-center items-center`}
                  ></i>
                </span>
              </div>
              <div>
                <div style={{ color: color }}>
                  <h3>{title}</h3>
                  <h1 className="text-4xl mt-1 mb-1">{Total}</h1>
                </div>
                <p>
                  <span>
                    <i className={`${status["icon"]} pe-2`}></i>
                  </span>
                  <span>
                    {status["percentage_no"]}
                    {status["percentage_status"]}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex xl:justify-between flex-wrap justify-center mt-4">
          <div className=" bg-[hsl(0,0%,100%)]   xl:w-[500px] w-[100%] xl:h-auto h-[240px] max-xl:mb-4 rounded-sm ">
            <h1 className="text-[rgb(229,116,152)] border-b border-spacing-3 text-lg p-2 ms-2">
              Appointments Year by Year
            </h1>
            <div className="p-3">
              <LineChart />
            </div>
          </div>
          <div className="bg-[hsl(0,0%,100%)] xl:w-[600px] w-[100%] xl:h-auto h-[250px] rounded-sm ">
            <h1 className="text-[rgb(229,116,152)] border-b border-spacing-3 p-2 text-lg ms-2">
              Patients Year by Year
            </h1>
            <PloatChart />
          </div>
        </div>
        <div className="flex xl:justify-between flex-wrap justify-center mt-4">
          <div className="bg-[hsl(0,0%,100%)] w-full ">
            <h2 className="text-[rgb(229,116,152)] border-b border-spacing-3  p-2 text-lg ps-2">
              Appointments
            </h2>
            <div className="overflow-x-scroll no-scrollbar">
              <table className="table table-bordered text-center mt-2  table-striped">
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Doctor</th>
                    <th>Check-Up</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {PatientDetails.map(
                    (
                      { patient_Name, Doctor, Check_up, Date, Time, status },
                      index
                    ) => (
                      <tr key={index} >
                        <td>{patient_Name}</td>
                        <td>{Doctor}</td>
                        <td>{Check_up}</td>
                        <td>{Date}</td>
                        <td>{Time}</td>
                        <td>
                          <span
                            className={`text-white h6 text-[10px] p-1 rounded-sm ${
                              status === "Cancel"
                                ? "bg-[rgb(239,110,110)]"
                                : status === "Completed"
                               ? "bg-[rgb(60,179,113)]"
                                : "bg-[rgb(255,170,42)]"
                            }`}
                          >
                            {status}
                          </span>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex xl:justify-between flex-wrap justify-center mt-4">
          <div className="bg-[hsl(0,0%,100%)] sm:w-[40%] w-[100%] max-sm:mb-4">
            <h2 className="text-[rgb(229,116,152)] border-b border-spacing-3  p-2 text-lg ps-2">
              Appointments Status
            </h2>
            <div className="d-flex justify-center items-center">
              <PieChart />
            </div>
          </div>
          <div className="bg-[hsl(0,0%,100%)] sm:w-[40%] w-[100%] ">
            <h2 className="text-[rgb(229,116,152)] border-b border-spacing-3  p-2 text-lg ps-2">
              Doctors Availability
            </h2>
            <div className="overflow-x-scroll no-scrollbar">
              <table className="table table-bordered text-center mt-2 ">
                <thead>
                  <tr>
                    <th>Doctor</th>
                    <th>Speciality</th>
                    <th>Availablity</th>
                  </tr>
                </thead>
                <tbody>
                  {Doctor_speciality.map(
                    ({ Availability, Doctor_name, Speciality }) => (
                      <tr>
                        <td>{Doctor_name}</td>
                        <td>{Speciality}</td>
                        <td>
                          <span
                            className={`text-white h6 text-[10px] p-1 rounded-sm ${
                              Availability === "Not Available"
                                ? "bg-[rgb(239,110,110)]"
                                : Availability === "Available"
                                ? "bg-[rgb(60,179,113)]"
                                : "bg-[rgb(255,170,42)]"
                            }`}
                          >
                            {Availability}
                          </span>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
