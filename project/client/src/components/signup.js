import { useCallback, useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { useSocket } from "./context/SocketProvider";
export default function Signup() {
  const [email, setemail] = useState("");
  const [room, setroom] = useState("");
  const [text, settext] = useState("Submit");
  const Navigate=useNavigate();
  const handlejoinroom = (useCallback((data) => {
    const {room} = data;
   Navigate(`/room/${room}`);
  },[Navigate]));
  useEffect(() => {
    socket.on("room:join", handlejoinroom);
    return () => {
      socket.off("room:join", handlejoinroom);
    };
  });

  const handleonchangeemail = (e) => {
    setemail(e.target.value);
  };
  const handleonchangeroom = (e) => {
    setroom(e.target.value);
  };
  const [slide, setslide] = useState({
    left: "48px",
    width: "45%",
    transition: "15s",
  });
  const bodystyle = {
    minHeight: "100vh",
  };
  const pagebox = {
    width: "1000px",
    height: "50vh",
  };
  const socket = useSocket();
  const handleonclick = useCallback(() => {
    socket.emit("room:join", { email, room });
    alert("succesful");
  }, [email, room, socket]);
  const handlelogonclick = () => {
    setslide({
      right: "48px",
      width: "45%",
      transitionDelay: "5s",
    });
    settext("Login");
  };
  const handlesignonclick = () => {
    setslide({
      left: "48px",
      width: "45%",
      transitionDelay: "5s",
    });

    settext("Submit");
  };
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center bg-primary ps-5 pe-5"
        style={bodystyle}
      >
        <div
          className="bg-dark text-white d-flex p-5 justify-content-between rounded-5 align-items-center position-relative"
          style={pagebox}
        >
          <div>
            <h1>Don't have an account</h1>
            <p>Create own account</p>
            <button className="btn btn-primary" onClick={handlesignonclick}>
              sign up
            </button>
          </div>
          <div>
            <h1>Have an account</h1>
            <p>Log into see your collection</p>
            <button className="btn btn-danger" onClick={handlelogonclick}>
              Login
            </button>
          </div>
          <div className="card position-absolute" style={slide}>
            <div className="card-body">
              <div>
                <input
                  type="email"
                  className="form-control border border-0 border-bottom border-2 border-black rounded-1 p-3"
                  placeholder="enter Your Email"
                  id="email"
                  required
                  onChange={handleonchangeemail}
                  value={email}
                />
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  className="form-control border border-0 border-bottom border-2 rounded-1 border-black p-3"
                  placeholder="Enter Room number "
                  id="room"
                  required
                  onChange={handleonchangeroom}
                  value={room}
                />
              </div>
              <div className="text-center mt-4">
                <input
                  type="button"
                  value={text}
                  className="btn btn-primary lh-lg"
                  onClick={handleonclick}
                  link="/room/:roomid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
