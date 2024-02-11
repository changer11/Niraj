import { React,useState } from "react";
const EditAppointment = () => {
  const [PatientID, setPatientID] = useState("");
  const [Department, setDepartment] = useState("Neuro");
  const [Doctor_Name, setDoctor_Name] = useState("");
  const [Appointment_Date, setAppointment_Date] = useState("");
  const [Time, setTime] = useState("10AM-11AM");
  const [Token, setToken] = useState("");
  const [Problem, SetProblem] = useState("");
  const [Confirm, setconfirm] = useState(false);
  const HandleOnsubmit = (e) => {
    e.preventDefault();
    console.log(
      PatientID,
      Department,
      Doctor_Name,
      Appointment_Date,
      Time,
      Token,
      Problem,
      Confirm
    );
  };
  return (
    <div className="xl:m-5 sm:m-0 ">
      <div className="bg-[hsl(0,0%,100%)] p-3">
        <h1 className="text-[rgb(229,116,152)] h4 border-b border-spacing-2 pb-2">
          Edit Appointment
        </h1>
        <form action="" onSubmit={HandleOnsubmit}>
          <div className="row max-sm:block">
            <div className="col">
              <div className="">
                <label htmlFor="PatientID" className="form-label font-semibold">
                  Patient ID
                </label>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="form-control w-[100%]"
                  value={PatientID}
                  id="PatientID"
                  placeholder="PatientID"
                  onChange={(e) => setPatientID(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col max-sm:mt-2">
              <div>
                <label htmlFor="Department" className="form-label font-semibold">
                  Department
                </label>
              </div>
              <div>
                <select
                  name="Department"
                  id="Department"
                  className="form-select"
                  value={Department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option value="Neuro" defaultValue={"Neuro"}>
                    Neuro
                  </option>
                  <option value="Ortho">Ortho</option>
                  <option value="General">General</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row max-sm:block mt-2">
            <div className="col">
              <div>
                <label htmlFor="Doctor_Name" className="form-label font-semibold">
                  Doctor Name
                </label>
              </div>
              <div>
                <input
                  type="text"
                  className="form-control w-[100%]"
                  id="Doctor_Name"
                  value={Doctor_Name}
                  placeholder="Doctor Name"
                  onChange={(e) => setDoctor_Name(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col max-sm:mt-2">
              <div>
                <label htmlFor="Appointment_Date" className="form-label font-semibold">
                  Appointment Date
                </label>
              </div>
              <div>
                <input
                  type="date"
                  className="form-control w-[100%]"
                  required
                  value={Appointment_Date}
                  id="Appointment_Date"
                  onChange={(e) => setAppointment_Date(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row max-sm:block mt-2">
            <div className="col max-sm:block">
              <div>
                <label htmlFor="Time" className="form-label font-semibold">
                  Time Slot
                </label>
              </div>
              <div>
                <select
                  class="form-control"
                  id="Time"
                  className="form-select"
                  value={Time}
                  onChange={(e) => setTime(e.target.value)}
                >
                  <option defaultValue={"10AM-11AM"}>10AM-11AM</option>
                  <option>11AM-12pm</option>
                  <option>12PM-01PM</option>
                  <option>2PM-3PM</option>
                  <option>3PM-4PM</option>
                  <option>4PM-5PM</option>
                  <option>6PM-7PM</option>
                  <option>7PM-8PM</option>
                  <option>8PM-9PM</option>
                </select>
              </div>
            </div>
            <div className="col max-sm:mt-2">
              <div>
                <label htmlFor="Token" className="form-label font-semibold">
                  Token Number
                </label>
              </div>
              <div>
                <input
                  type="number"
                  id="Token"
                  placeholder="Token Number"
                  className="form-control"
                  value={Token}
                  onChange={(e) => setToken(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="Problem" className="form-label font-semibold">
              Problem
            </label>
            <textarea
              name=""
              id="Problem"
              cols="30"
              rows="10"
              className="form-control h-[100px]"
              placeholder="Problem"
              value={Problem}
              onChange={(e) => SetProblem(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mt-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="Confirm"
              onChange={(e) => setconfirm(e.target.checked)}
            />
            <label htmlFor="Confirm" className="ms-2">
              Please Confirm
            </label>
          </div>
          <div className="mt-2">
            <input
              type="submit"
              className="btn btn-danger bg-danger"
              required
              value={"Update"}
            />
          </div>
        </form>
        <div className="mt-3">
          <div className="alert alert-success alert-dismissible fade show">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
            ></button>
            <strong>Success!</strong> This alert box could indicate a successful
            or positive action.
          </div>
          <div className="alert alert-warning alert-dismissible fade show">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
            ></button>
            <strong>Warning!</strong> This alert box could indicate a warning
            that might need attention.
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditAppointment;
