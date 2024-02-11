import { React } from "react";
const EditDoctor = () => {
  return (
    <div className="xl:m-5 sm:m-0 ">
      <div className="bg-[hsl(0,0%,100%)] p-3">
        <h1 className="text-[rgb(229,116,152)] h4">Add Doctor</h1>
        <form action="">
          <div className="row max-sm:block ">
            <div className="col">
              <div className="">
                <label htmlFor="Name" className="form-label font-semibold">
                  Doctor Name
                </label>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="form-control w-[100%]"
                  id="Name"
                  placeholder="Name"
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
                  placeholder="D-O-B"
                />
              </div>
            </div>
          </div>
          <div className="row  max-sm:block mt-2">
            <div className="col">
              <div>
                <label htmlFor="Specialization" className="form-label font-semibold">
                  Specialization
                </label>
              </div>
              <div>
                <input
                  type="text"
                  className="form-control w-[100%]"
                  id="Specialization"
                  placeholder="Specialization"
                />
              </div>
            </div>
            <div className="col max-sm:mt-2">
              <div>
                <label htmlFor="Experience" className="form-label font-semibold">
                  Experience
                </label>
              </div>
              <div>
                <input
                  type="number"
                  className="form-control w-[100%]"
                  required
                  id="Experience"
                  placeholder="Experience"
                />
              </div>
            </div>
          </div>
          <div className="row  max-sm:block mt-2">
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
                  placeholder="Age"
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
                  id="Phone"
                  placeholder="Phone"
                />
              </div>
            </div>
          </div>
          <div className="row max-sm:block mt-2">
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
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="col max-sm:mt-2 ">
              <div>
                <label htmlFor="Gender" className="form-label font-semibold">
                  Gender
                </label>
              </div>
              <div>
                <select name="" id="Gender" className="form-select">
                  <option value="male" selected>
                    Male
                  </option>
                  <option value="female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-2 flex row max-sm:block max-sm:block">
            <div className="col">
              <label htmlFor="Doctor Details" className="form-label font-semibold">
                Doctor Details
              </label>
              <textarea
                name=""
                id="Doctor_Details"
                cols="30"
                rows="10"
                className="form-control h-[100px]"
                placeholder="Doctor Details"
              ></textarea>
            </div>
            <div className="max-sm:mt-2 col">
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
              ></textarea>
            </div>
          </div>
          <div className="mt-2">
            <div>
              <label htmlFor="File" className="form-label font-semibold">
                File
              </label>
            </div>
            <div>
              <input type="file" className="form-control" id="File" />
            </div>
          </div>
          <div className="mt-2">
            <input type="checkbox" className="form-check-input" id="Confirm" />
            <label htmlFor="Confirm" className="ms-2">
              Please Confirm
            </label>
          </div>
          <div className="mt-2">
            <input
              type="submit"
              className="btn btn-danger bg-danger"
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
export default EditDoctor;
