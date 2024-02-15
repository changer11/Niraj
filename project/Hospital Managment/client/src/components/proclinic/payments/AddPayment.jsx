import { React, useEffect, useState } from "react";
const AddPayement = () => {
  const [PatientID, setPatientID] = useState("");
  const [patient_Name, setPatientName] = useState("");
  const [Department, setDepartment] = useState("Neuro");
  const [Doctor_Name, setDoctor_Name] = useState("");
  const [Admission_Date, setAdmission_Date] = useState("");
  const [Discharge, setDischarge] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [cost, setCost] = useState("");
  const [discount, setdiscount] = useState("");
  const [advancePaid, setAdvancePaid] = useState("");
  const [type, setType] = useState("Cash");
  const [card_check_number, setcard_check_number] = useState("");
  const [Confirm, setconfirm] = useState(false);
  const [loader, setloader] = useState(false);
  let [addcost, setaddcost] = useState([]);
  let [addservice, setadservice] = useState([]);

  const HandleOnsubmit = async (e) => {
    let servicelist;
    let costlist;
    if (addservice != "") {
      servicelist = [...serviceName, ...addservice];
      costlist = [...cost, ...addcost];
    } else {
      servicelist = [serviceName];
      costlist = [cost];
    }
    e.preventDefault();
    const url = "http://localhost:4000/payment";
    const data = {
      PatientID,
      patient_Name,
      Department,
      Doctor_Name,
      Admission_Date,
      Discharge,
      service: {
        serviceName: servicelist,
        cost: costlist,
      },
      payment: {
        discount: Number(discount),
        type,
        advancePaid: Number(advancePaid),
        card_check_number: Number(card_check_number),
      },
    };
    if (Confirm) {
      setloader(true);
      let res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      let res_data = await res.json();
      if (res_data === "Payment added successfully") {
        alert(res_data);
        setloader(false);
        setPatientID("");
        setPatientName("");
        setDoctor_Name("");
        setAdmission_Date("");
        setDischarge("");
        setCost("");
        setdiscount("");
        setAdvancePaid("");
        setcard_check_number("");
        setServiceName([]);
        setadservice([]);
        setaddcost([]);
      } else {
        setloader(false);
        alert(res_data);
      }
    } else {
      alert("please select  confirm button");
    }
  };

  const handleonchage = (e, index) => {
    addservice[index] = e.target.value;
    setadservice([...addservice]);
  };
  const handleaddcost = (e, index) => {
    addcost[index] = e.target.value;
    setaddcost([...addcost]);
  };
  return (
    <div className="xl:m-5 sm:m-0 ">
      <div className="bg-[hsl(0,0%,100%)] p-3 relative">
        <div className={`${loader ? "blur" : null}`}>
          <h1 className="text-[rgb(229,116,152)] h4 border-b border-spacing-2 pb-2">
            Add Payment
          </h1>
          <form action="" onSubmit={HandleOnsubmit}>
            <div className="row max-sm:block">
              <div className="col">
                <div className="">
                  <label
                    htmlFor="PatientID"
                    className="form-label font-semibold"
                  >
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
                    required
                    onChange={(e) => setPatientID(e.target.value)}
                  />
                </div>
              </div>
              <div className="col max-sm:mt-2">
                <div>
                  <label
                    htmlFor="Patient_Name"
                    className="form-label font-semibold"
                  >
                    Patient Name
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    id="Patient_Name"
                    className="form-control"
                    placeholder="Patient Name"
                    value={patient_Name}
                    required
                    onChange={(e) => setPatientName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row mt-2 max-sm:block">
              <div className="col">
                <div>
                  <label
                    htmlFor="Department"
                    className="form-label font-semibold"
                  >
                    Department
                  </label>
                </div>
                <div>
                  <select
                    name="Department"
                    id="Department"
                    className="form-select"
                    value={Department}
                    required
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
              <div className="col max-sm:mt-2">
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
                    required
                    value={Doctor_Name}
                    placeholder="Doctor Name"
                    onChange={(e) => setDoctor_Name(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row mt-2 max-sm:block">
              <div className="col">
                <div>
                  <label
                    htmlFor="Admission_Date"
                    className="form-label font-semibold"
                  >
                    Admission Date
                  </label>
                </div>
                <div>
                  <input
                    type="date"
                    className="form-control w-[100%]"
                    value={Admission_Date}
                    id="Admission_Date"
                    required
                    onChange={(e) => setAdmission_Date(e.target.value)}
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
                    className="form-control w-[100%]"
                    value={Discharge}
                    required
                    id="Discharge_Date"
                    onChange={(e) => setDischarge(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h1 className="bg-[rgb(226,225,225)] h4 border-b border-spacing-2 p-2 rounded-sm">
                Services
              </h1>
              <div className="row max-sm:block ">
                <div className="col">
                  <div>
                    <label
                      htmlFor="Service_Name"
                      className="form-label font-semibold"
                    >
                      Service Name
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control w-[100%]"
                      placeholder="Service Name"
                      value={serviceName}
                      required
                      id="Service_Name"
                      onChange={(e) => setServiceName([e.target.value])}
                    />
                  </div>
                </div>

                <div className="col max-sm:mt-2">
                  <div>
                    <label htmlFor="Cost" className="form-label font-semibold">
                      Cost of Treatment
                    </label>
                  </div>
                  <div>
                    <input
                      type="number"
                      className="form-control w-[100%]"
                      value={cost}
                      placeholder="Cost of Treatment"
                      id="Cost"
                      required
                      onChange={(e) => setCost([e.target.value])}
                    />
                  </div>
                </div>
              </div>
              {addservice.map((value, index) => (
                <div className="row max-sm:block " key={index}>
                  <div className="col">
                    <div>
                      <label
                        htmlFor="Service_Name"
                        className="form-label font-semibold"
                      >
                        Service Name
                      </label>
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control w-[100%]"
                        placeholder="Service Name"
                        value={addservice[index]}
                        id="Service_Name"
                        required
                        onChange={(e) => handleonchage(e, index)}
                      />
                    </div>
                  </div>
                  <div className="col max-sm:mt-2">
                    <div>
                      <label
                        htmlFor="Cost"
                        className="form-label font-semibold"
                      >
                        Cost of Treatment
                      </label>
                    </div>
                    <div>
                      <input
                        type="number"
                        className="form-control w-[100%]"
                        value={addcost[index]}
                        placeholder="Cost of Treatment"
                        id="Cost"
                        required
                        onChange={(e) => handleaddcost(e, index)}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-2">
                <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={(e) => {
                    setadservice([...addservice, ""]);
                    setaddcost([...addcost, ""]);
                  }}
                >
                  <i className="fa fa-plus me-2"></i>
                  <span>Add Service</span>
                </button>
                {addservice.length != 0 ? (
                  <button
                    className="btn btn-danger ms-2"
                    onClick={(e) => {
                      e.preventDefault();
                      addservice.pop();
                      addcost.pop();
                      alert(
                        "for delete you have to enter some data in any input field because this issue comes from form validation"
                      );
                    }}
                  >
                    <i className="fa fa-trash-o me-2"></i>
                    <span>Delete Service</span>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="mt-2">
              <h1 className="bg-[rgb(226,225,225)] h4 border-b border-spacing-2 p-2 rounded-sm">
                Payment
              </h1>
              <div className="row max-sm:block ">
                <div className="col">
                  <div>
                    <label
                      htmlFor="discount"
                      className="form-label font-semibold"
                    >
                      Discount
                    </label>
                  </div>
                  <div>
                    <input
                      type="number"
                      className="form-control w-[100%]"
                      placeholder="Discount"
                      value={discount}
                      id="discount"
                      onChange={(e) => setdiscount(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col max-sm:mt-2">
                  <div>
                    <label
                      htmlFor="Advance"
                      className="form-label font-semibold"
                    >
                      Advance Paid
                    </label>
                  </div>
                  <div>
                    <input
                      type="number"
                      className="form-control w-[100%]"
                      value={advancePaid}
                      placeholder="Advance paid"
                      id="Advance"
                      required
                      onChange={(e) => setAdvancePaid(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col max-sm:mt-2">
                  <div>
                    <label htmlFor="type" className="form-label font-semibold">
                      Payment Type
                    </label>
                  </div>
                  <div>
                    <select
                      name=""
                      id="type"
                      className="form-select"
                      onChange={(e) => setType(e.target.value)}
                      value={type}
                    >
                      <option value="Check">Check</option>
                      <option value="Card">Card</option>
                      <option defaultValue="Cash">Cash</option>
                    </select>
                  </div>
                </div>
                <div className="col max-sm:mt-2">
                  <div>
                    <label
                      htmlFor="card_check_nu"
                      className="form-label font-semibold"
                    >
                      Card/Check No
                    </label>
                  </div>
                  <div>
                    <input
                      type="number"
                      className="form-control w-[100%]"
                      value={card_check_number}
                      placeholder="Card/Check No"
                      id="card_check_nu"
                      onChange={(e) => setcard_check_number(e.target.value)}
                      disabled={type === "Cash" ? true : false}
                      required
                    />
                  </div>
                </div>
              </div>
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
              <strong>Success!</strong> This alert box could indicate a
              successful or positive action.
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
export default AddPayement;
