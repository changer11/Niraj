import { React } from "react";
import { useState } from "react";
const Addpatient = () => {
  const [Name, setName] = useState("");
  const [Dob, SetDob] = useState("");
  const [Age, setAge] = useState("");
  const [Phone, SetPhone] = useState("");
  const [Email, SetEmail] = useState("");
  const [Gender, setGender] = useState("Male");
  const [Address, SetAddress] = useState("");
  const [File, SetFile] = useState("");
  const [confirm, setconfirm] = useState(false);
  const HandleOnsubmit = async (e) => {
    e.preventDefault();
    const Data = {
      Name: Name,
      dob: Dob,
      age: Number(Age),
      phone: Number(Phone),
      email: Email,
      gender: Gender,
      address: Address,
      file: File,
    };
    if (confirm) {
      let res = await fetch("http://localhost:4000/patient", {
        method: "POST",
        body: JSON.stringify(Data),
        headers: { "Content-Type": "application/json" },
      });
      let res_data = await res.json();
      if (res_data === "Patient added successfully") {
        alert(res_data);
        setAge("");
        setGender("Male");
        setName("");
        SetAddress("");
        SetPhone("");
        SetFile("");
        SetDob("");
        SetEmail("");
      } else {
        alert(res_data);
      }
    } else {
      alert("Please Confirm");
    }
  };
  return (
    <div className="xl:m-5 sm:m-0 ">
      <div className="bg-[hsl(0,0%,100%)] p-3">
        <h1 className="text-[rgb(229,116,152)] h4">Add Patient</h1>
        <form action="" onSubmit={HandleOnsubmit}>
          <div className="row max-sm:block">
            <div className="col">
              <div className="">
                <label htmlFor="Name" className="form-label font-semibold">
                  Patient Name
                </label>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="form-control w-[100%]"
                  value={Name}
                  id="Name"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col max-sm:mt-2">
              <div>
                <label htmlFor="D-O-B" className="form-label font-semibold">
                  Date Of Birth
                </label>
              </div>
              <div>
                <input
                  type="date"
                  className="form-control w-[100%]"
                  id="D-O-B"
                  value={Dob}
                  placeholder="D-O-B"
                  onChange={(e) => SetDob(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row max-sm:block  mt-2">
            <div className="col">
              <div>
                <label htmlFor="Age" className="form-label font-semibold">
                  Age
                </label>
              </div>
              <div>
                <input
                  type="text"
                  className="form-control w-[100%]"
                  id="Age"
                  value={Age}
                  placeholder="Age"
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col max-sm:mt-2">
              <div>
                <label htmlFor="Phone" className="form-label font-semibold">
                  Phone
                </label>
              </div>
              <div>
                <input
                  type="number"
                  className="form-control w-[100%]"
                  required
                  value={Phone}
                  id="Phone"
                  placeholder="Phone"
                  onChange={(e) => SetPhone(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row mt-2 max-sm:block">
            <div className="col max-sm:block">
              <div>
                <label htmlFor="Email" className="form-label font-semibold">
                  Email
                </label>
              </div>
              <div>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  value={Email}
                  placeholder="Email"
                  onChange={(e) => SetEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col max-sm:mt-2">
              <div>
                <label htmlFor="Gender" className="form-label font-semibold">
                  Gender
                </label>
              </div>
              <div>
                <select
                  name="Gender"
                  id="Gender"
                  className="form-select"
                  value={Gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="male" defaultValue={"male"}>
                    Male
                  </option>
                  <option value="female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="Address" className="form-label font-semibold">
              Address
            </label>
            <textarea
              name=""
              id="Address"
              cols="30"
              rows="10"
              className="form-control h-[100px]"
              placeholder="Address"
              value={Address}
              onChange={(e) => SetAddress(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mt-2">
            <div>
              <label htmlFor="File" className="form-label font-semibold">
                File
              </label>
            </div>
            <div>
              <input
                type="file"
                className="form-control"
                id="File"
                value={File}
                required
                onChange={(e) => {
                  SetFile(e.target.value);
                }}
              />
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
    </div>
  );
};
export default Addpatient;
