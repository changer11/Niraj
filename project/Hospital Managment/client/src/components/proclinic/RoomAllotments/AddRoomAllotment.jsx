import { React, useState } from "react";
const AddRoom = () => {
  const [RoomNumber, setRoomNumber] = useState("");
  const [RoomType, setRoomType] = useState("ICU");
  const [Patient_Name, setPatient_Name] = useState("");
  const [Allotment_Date, setAllotment_Date] = useState("");
  console.log(RoomType);
  const [Discharge_Date, setDischarge_Date] = useState("10AM-11AM");
  const [Doctor_Name, setDoctor_Name] = useState("");
  const [Confirm, setconfirm] = useState(false);
  const [loader, setloader] = useState(false);
  const HandleOnsubmit = async (e) => {
    e.preventDefault();
    let url = "http://localhost:4000/Room";
    let data = {
      RoomNumber: Number(RoomNumber),
      RoomType,
      Patient_Name,
      Allotment_Date,
      Discharge_Date,
      Doctor_Name,
    };
    if (Confirm) {
      setloader(true)
      let res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      let res_data = await res.json();
      if (res_data === "Room Succesfully Added") {
        setloader(false)
        alert(res_data);
        setRoomNumber("");
        setAllotment_Date("");
        setRoomType("");
        setconfirm(false);
        setPatient_Name("");
        setDoctor_Name("");
        setDischarge_Date("");
      } else {
        setloader(false);
        alert(res_data);
      }
    } else {
      alert("please confirm it");
    }
  };
  return (
    <div className="xl:m-5 sm:m-0 ">
      <div className="bg-[hsl(0,0%,100%)] p-3 relative">
       <div className={`${loader?"blur":null}`}>
       <h1 className="text-[rgb(229,116,152)] h4 border-b border-spacing-2 pb-2">
          Add Room Allotment
        </h1>
        <form action="" onSubmit={HandleOnsubmit}>
          <div className="row max-sm:block">
            <div className="col">
              <div className="">
                <label
                  htmlFor="Room_number"
                  className="form-label font-semibold"
                >
                  Room Number
                </label>
              </div>
              <div className="w-full">
                <input
                  type="number"
                  className="form-control w-[100%]"
                  value={RoomNumber}
                  id="Room_number"
                  placeholder="Room Number"
                  onChange={(e) => setRoomNumber(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col max-sm:mt-2">
              <div>
                <label htmlFor="Room_Type" className="form-label font-semibold">
                  Room Type
                </label>
              </div>
              <div>
                <select
                  name="Department"
                  id="Room_Type"
                  className="form-select"
                  value={RoomType}
                  onChange={(e) => setRoomType(e.target.value)}
                >
                  <option  defaultValue={"ICU"}>
                    ICU
                  </option>
                  <option value="General">General</option>
                  <option value="AC Room">AC Room</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row mt-2 max-sm:block">
            <div className="col">
              <div>
                <label
                  htmlFor="Doctor_Name"
                  className="form-label font-semibold"
                >
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
                <label htmlFor="Patient" className="form-label font-semibold">
                  Patient Name
                </label>
              </div>
              <div>
                <input
                  type="text"
                  className="form-control w-[100%]"
                  required
                  value={Patient_Name}
                  id="Patient"
                  onChange={(e) => setPatient_Name(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row mt-2 max-sm:block">
            <div className="col max-sm:mt-2">
              <div>
                <label
                  htmlFor="Allotment_Date"
                  className="form-label font-semibold"
                >
                  Allotment Date
                </label>
              </div>
              <div>
                <input
                  type="date"
                  id="Allotment_Date"
                  placeholder="Token Number"
                  className="form-control"
                  value={Allotment_Date}
                  onChange={(e) => setAllotment_Date(e.target.value)}
                />
              </div>
            </div>
            <div className="col max-sm:mt-2">
              <div>
                <label
                  htmlFor="Discharge_Date"
                  className="form-label font-semibold"
                >
                  Discharge Date
                </label>
              </div>
              <div>
                <input
                  type="date"
                  id="Discharge_Date"
                  placeholder="Token Number"
                  className="form-control"
                  value={Discharge_Date}
                  onChange={(e) => setDischarge_Date(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="mt-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="Confirm"
              checked={Confirm}
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
              value={"Submit"}
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
      
        {loader ? (
          <div className={`absolute top-[43%] left-[42%]  `}>
            <div class="spinner-border text-primary border-[7px] w-[80px] h-[80px]"></div>
          </div>
        ) : null}
      
      </div>
    </div>
  );
};
export default AddRoom;
