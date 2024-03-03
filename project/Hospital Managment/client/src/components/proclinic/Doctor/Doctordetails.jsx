import { React } from "react";
import { PatientDetails } from "../../../constant/Dashboard/Dashboard";
const DoctorDetails = () => {
  return (
    <div className="m-4 max-sm:m-2 ">
      <div className="flex justify-between flex-wrap">
        <div className="bg-[hsl(0,0%,100%)] p-3 xl:w-[45%] w-[100%]">
          <h1 className="text-[rgb(229,116,152)] h4 border-b border-spacing-3 pb-2">
            Patient Details
          </h1>
          <div className="overflow-x-scroll no-scrollbar">
            <table className="table table-bordered text-center mt-2  table-striped">
              <thead>
                <tr>
                  <th>Patient Name</th>
                  <td> Daniel Smith</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Date Of Birth</th>
                  <td>xxxxx</td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td>xxxx</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>xxxx</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>xxxxx</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>xxxx</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-center">
            <button className="btn btn-outline-secondary rounded-none">
              <i className="fa fa-download text-danger me-1"></i> CSV
            </button>
            <button className="btn btn-outline-secondary rounded-none">
              <i className="fa fa-print text-danger me-1"></i> print
            </button>
            <button className="btn btn-outline-secondary rounded-none">
              <i className="fa fa-file-pdf-o text-danger me-1"></i> PDF
            </button>
            <button className="btn btn-outline-secondary rounded-none">
              <i className="fa fa-file-excel-o text-danger me-1"></i> EXCEL
            </button>
          </div>
          <div className="flex gap-2 mt-2">
            <button className="btn btn-outline-secondary rounded-sm bg-danger-25">
              {" "}
              <i className="fa fa-edit me-1"></i>Edit
            </button>
            <button className="btn btn-danger rounded-sm">
              <i className="fa fa-trash-o me-1"></i> Delete
            </button>
          </div>
        </div>
        <div className="bg-[hsl(0,0%,100%)] p-3 xl:w-[45%] w-[100%] max-sm:mt-4">
          <h1 className="text-[rgb(229,116,152)] h4 border-b border-spacing-3 pb-2">
            Patient Visits
          </h1>
          <div className="overflow-x-scroll no-scrollbar ">
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
                    <tr>
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
          <div className="flex justify-center">
            <button className="btn btn-outline-secondary rounded-none">
              {" "}
              <i className="fa fa-download text-danger me-1"></i> CSV
            </button>
            <button className="btn btn-outline-secondary rounded-none">
              <i className="fa fa-print text-danger me-1"></i> print
            </button>
            <button className="btn btn-outline-secondary rounded-none">
              <i className="fa fa-file-pdf-o text-danger me-1"></i> PDF
            </button>
            <button className="btn btn-outline-secondary rounded-none">
              <i className="fa fa-file-excel-o text-danger me-1"></i> EXCEL
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[hsl(0,0%,100%)] p-3 mt-4">
        <h1 className="text-[rgb(229,116,152)] h4 border-b border-spacing-3 pb-2">
          Patient Payment Transactions
        </h1>
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
                  <tr>
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
        <div className="flex justify-center">
          <button className="btn btn-outline-secondary rounded-none">
            {" "}
            <i className="fa fa-download text-danger me-1"></i> CSV
          </button>
          <button className="btn btn-outline-secondary rounded-none">
            <i className="fa fa-print text-danger me-1"></i> print
          </button>
          <button className="btn btn-outline-secondary rounded-none">
            <i className="fa fa-file-pdf-o text-danger me-1"></i> PDF
          </button>
          <button className="btn btn-outline-secondary rounded-none">
            <i className="fa fa-file-excel-o text-danger me-1"></i> EXCEL
          </button>
        </div>
      </div>
    </div>
  );
};
export default DoctorDetails;
