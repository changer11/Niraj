import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ setloginmode }) => {
  const [password, setPassword] = useState("");
  const [Username, setUsername] = useState("");
  const [passwordVissibillity, setPasswordVisibility] = useState("password");
  const [usermode, setusermode] = useState("");
  const [loader, setloader] = useState(false);
  console.log(usermode);
  const Navigate = useNavigate();
  let date;
  let currentday;
  let current_month;
  let currentyear;
  let current_minute;
  let current_hour;
  function getDateandTime() {
    date = new Date();
    currentday = date.getDate();
    current_month = date.getMonth();
    currentyear = date.getFullYear();
    current_minute = date.getMinutes();
    current_hour = date.getHours();
    if (current_minute < 10) {
      current_minute = "0" + current_minute;
    } else {
      current_minute = current_minute;
    }
    if (current_month < 10) {
      current_month = "0" + current_month;
    } else {
      current_month = current_month;
    }
  }
  const HandleonSubmit = async (e) => {
    e.preventDefault();
    getDateandTime();
    let entrydate = `${currentday}-${current_month}-${currentyear}`;
    let Entrytime = `${current_hour}:${current_minute}`;
    const userdata = {
      password,
      Username,
      entrydate,
      Entrytime,
    };
    if (usermode) {
      if (Username != "" && password != "") {
        if (usermode === "Patient") {
          setloader(true);
          const response = await fetch("http://localhost:4000/patientLogin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userdata),
          });
          const res_data = await response.json();
          if (res_data === "logged In") {
            setloader(false);
            alert(res_data);
            const setstatus = localStorage.setItem(
              "users",
              JSON.stringify(userdata)
            );
            setloginmode("block");
            Navigate("/");
            if ((window.location.href = "http://localhost:5173/")) {
              window.location.reload();
            }
            if (setstatus) {
              setPassword("");
              setUsername("");
            }
          } else {
            setloader(false);
            alert(res_data);
            setPassword("");
            setUsername("");
          }
        } else if (usermode === "Doctor") {
          setloader(true);
          const response = await fetch("http://localhost:4000/DoctorLogin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userdata),
          });
          const res_data = await response.json();
          if (res_data === "logged In") {
            setloader(false);
            alert(res_data);
            const setstatus = localStorage.setItem(
              "users",
              JSON.stringify(userdata)
            );
            setloginmode("block");
            Navigate("/");
            if ((window.location.href = "http://localhost:5173/")) {
              window.location.reload();
            }
            if (setstatus) {
              setPassword("");
              setUsername("");
            }
          } else {
            setloader(false);
            alert(res_data);
            setPassword("");
            setUsername("");
          }
        } else {
          setloader(true);
          const response = await fetch("http://localhost:4000/AdminLogin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userdata),
          });
          const res_data = await response.json();
          if (res_data === "Admin mode logged In") {
            setloader(false);
            alert(res_data);
            const setstatus = localStorage.setItem(
              "users",
              JSON.stringify(userdata)
            );
            setloginmode("block");
            Navigate("/");
            if ((window.location.href = "http://localhost:5173/")) {
              window.location.reload();
            }
            if (setstatus) {
              setPassword("");
              setUsername("");
            }
          } else {
            setloader(false);
            alert(res_data);
            setPassword("");
            setUsername("");
          }
        }
      } else {
        alert("fill the data");
      }
    } else {
      alert("Choose User Type");
    }
  };
  return (
    <div className="m-5 flex justify-center">
      <div className="bg-[hsl(0,0%,100%)] p-3 max-sm:w-[100%] xl:w-[40%] relative">
        <div className={`${loader ? "blur-sm" : null}`}>
          <h1 className="text-[rgb(229,116,152)] h4 border-b border-spacing-2 pb-3 flex justify-center">
            Login
          </h1>
          <div>
            <form action="" onSubmit={HandleonSubmit}>
              <div className="mt-3">
                <select
                  name="Select User Type"
                  id=""
                  className="form-select leading-6  bg-[rgb(240,240,240)] "
                  value={usermode}
                  onChange={(e) => setusermode(e.target.value)}
                >
                  <option value="" disabled selected hidden>
                    Select User Type
                  </option>
                  <option Value="Admin">Admin</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Patient">Patient</option>
                </select>
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  className="form-control bg-[rgb(240,240,240)] leading-8"
                  value={Username}
                  placeholder="Username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  required
                ></input>
              </div>
              <div className="mt-4 relative flex">
                <input
                  type={passwordVissibillity}
                  className="form-control leading-8 bg-[hsl(0,0%,94%)]
              "
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                  placeholder="Password"
                />
                <span
                  className="absolute right-3 top-3 cursor-pointer"
                  onClick={() =>
                    passwordVissibillity === "password"
                      ? setPasswordVisibility("text")
                      : setPasswordVisibility("password")
                  }
                >
                  <i className="fa fa-eye"></i>
                  <span
                    className={`absolute right-[5px] top-[-0.5px]   ${
                      passwordVissibillity === "text" ? "hidden" : "block"
                    } `}
                  >
                    /
                  </span>
                </span>
              </div>
              <div className="flex  mt-2">
                <input type="checkbox" className="form-check-input" />
                <span className="ms-2">Rembember</span>
              </div>
              <div
                className="bg-[rgb(229,116,152)] mt-3 flex justify-center items-center rounded-sm text-white :bg-[rgb(229,116,152)] 
             leading-10 "
              >
                <input type="submit" value="Login" className="font-bold " />
              </div>
            </form>
          </div>
          <div className="flex justify-center leading-10">
            <p>
              New User,{" "}
              <span
                className="text-primary cursor-pointer"
                onClick={() => Navigate("/SignUp")}
              >
                Sign Up
              </span>{" "}
              Here
            </p>
          </div>
        </div>
        {loader ? (
          <div className={`absolute top-[43%] left-[42%]`}>
            <div class="spinner-border text-primary border-[7px] w-[80px] h-[80px]"></div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Login;
