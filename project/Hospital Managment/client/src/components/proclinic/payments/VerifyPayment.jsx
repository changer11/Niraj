import { useEffect, useState } from "react";

const Verifypayment = () => {
  const [pendingdata, setpendingdata] = useState("");
  const [patient_Name, setpatientName] = useState();
  const [getpendingdatastatus, setpendingdatastatus] = useState("");
  const [Id, setid] = useState("");
  const [department, setdepartment] = useState("");
  const [Doctor_Name, setDoctorName] = useState("");
  const [loader, setloader] = useState(false);
  useEffect(() => {
    fetch("http://localhost:4000/payment")
      .then((res) => res.json())
      .then((data) => setpendingdata(data));
    if (pendingdata) {
      let collecteddata = pendingdata.find((x) => x.status === "Pending");
      console.log(collecteddata["status"]);
      if (collecteddata) {
        setpendingdatastatus(true);
      } else {
        setpendingdatastatus(false);
      }
    }
  });
  console.log(getpendingdatastatus);
  const HandleonPreview = (e) => {
    console.log(e.status);
    if (Id === e["_id"]) {
      setid("");
    } else {
      setid(e["_id"]);
    }
    setdepartment(e["Department"]);
    setpatientName(e["patient_Name"]);
    setDoctorName(e["Doctor_Name"]);
  };
  const Handleonapproval = async (e) => {
    const updatedata = {
      _id: e["_id"],
      status: "Completed",
    };
    let confirmation = window.confirm("Are you sure approve this?");
    if (confirmation) {
      setloader(true);
      const res = await fetch("http://localhost:4000/payment", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedata),
      });
      const data = await res.json();
      if (data === "Approved") {
        alert(data);
        setloader(false);
      } else {
        alert(data);
        setloader(false);
      }
    }
  };
  const HandleonCancelled = async (e) => {
    const updatedata = {
      _id: e["_id"],
      status: "Cancelled",
    };
    let confirmation = window.confirm("Are you sure approve this?");
    if (confirmation) {
      setloader(true);
      const res = await fetch("http://localhost:4000/payment", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedata),
      });
      const data = await res.json();
      if (data === "Cancelled") {
        alert(data);
        setloader(false);
      } else {
        alert(data);
        setloader(false);
      }
    }
  };
  return (
    <div className=" relative">
      <div
        className={`${
          loader ? "blur" : null
        }  w-[100%] flex items-center flex-col bg-[hsl(208,35%,13%)] h-[81.8vh] `}
      >
        {pendingdata != 0 ? (
          pendingdata.map((e, index) =>
            getpendingdatastatus ? (
              e.status === "Pending" ? (
                <div
                  className="card w-[50%] mt-3 bg-[hsl(210,56%,25%)] text-white
              "
                  key={index}
                >
                  <div>
                    <div className="card-header p-3">
                      <div>
                        <p>
                          <span className="font-bold">{e.patient_Name}</span>{" "}
                          <span>registered details verify it </span>
                        </p>
                      </div>
                      <div
                        className="flex justify-end mt-2
                    "
                      >
                        <button
                          className=" btn btn-secondary bg-[hsl(208,35%,13%)] text-white"
                          onClick={() => {
                            HandleonPreview(e, index);
                          }}
                        >
                          Preview
                        </button>
                      </div>
                    </div>

                    <div
                      className={`transition-all ${
                        Id === e["_id"] ? "w-[100%]" : "w-0 h-0 overflow-hidden"
                      }`}
                      key={index}
                    >
                      <div className="w-[100%] card-body">
                        <div className="flex justify-between border-b border-spacing-7 pb-3 pe-3 ps-3 ">
                          <span className="font-bold">Patient Name</span>
                          <span>{patient_Name}</span>
                        </div>
                        <div className="flex justify-between border-b border-spacing-7 p-3">
                          <span className="font-bold">Doctor</span>
                          <span>{Doctor_Name}</span>
                        </div>
                        <div className="flex justify-between border-b border-spacing-7 p-3">
                          <span className="font-bold">Department</span>
                          <span>{department}</span>
                        </div>
                      </div>
                      <div className="mt-3 card-footer flex justify-between">
                        <div>
                          <button
                            onClick={() => Handleonapproval(e)}
                            className="btn btn-primary"
                          >
                            Approve
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() => HandleonCancelled(e)}
                            className="btn btn-danger"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null
            ) : index < 1 ? (
              <div className="flex justify-center h-[80vh] items-center">
                <div className="card w-[100%] p-3 text-center bg-[hsl(210,56%,25%)] text-white">
                  <p>No Pending Data Available</p>
                </div>
              </div>
            ) : null
          )
        ) : (
          <div className="flex justify-center h-[80vh] items-center">
            <div className="card w-[100%] p-3 text-center bg-[hsl(210,56%,25%)]  text-white">
              <p>No Data Available</p>
            </div>
          </div>
        )}
      </div>
      {loader ? (
        <div className={`absolute top-[43%] left-[42%]  `}>
          <div class="spinner-border text-primary border-[7px] w-[80px] h-[80px]"></div>
        </div>
      ) : null}
    </div>
  );
};
export default Verifypayment;
