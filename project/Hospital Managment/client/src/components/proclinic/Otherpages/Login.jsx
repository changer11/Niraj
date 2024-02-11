import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ setloginmode }) => {
  const [password, setPassword] = useState("");
  const [Username, setUsername] = useState("");
  const [passwordVissibillity, setPasswordVisibility] = useState("password");
  const Navigate = useNavigate();
  const HandleonSubmit = (e) => {
    e.preventDefault();
    setloginmode("block");
    Navigate("/");
    alert("Logged In");
  };
  return (
    <div className="m-5 flex justify-center">
      <div className="bg-[hsl(0,0%,100%)] p-3 max-sm:w-[100%] xl:w-[40%]">
        <h1 className="text-[rgb(229,116,152)] h4 border-b border-spacing-2 pb-3 flex justify-center">
          Login
        </h1>
        <div>
          <form action="" onSubmit={HandleonSubmit}>
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
            <div className="mt-5 relative flex">
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
      </div>
    </div>
  );
};
export default Login;
