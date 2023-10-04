import React, { useCallback, useState, useEffect } from "react";
import { useSocket } from "./SocketProvider";
import peer from "../service/peer";
import ReactPlayer from "react-player";
export default function Roompage() {
  let lobby = {
    minHeight: "90vh",
    width: "100%",
  };
  let calldeclined = {
    transform: "rotate(135deg)",
  };
  const [remotesockedid, setremotesocketid] = useState(null);
  const [mystream, setmystream] = useState();
  const socket = useSocket(true);
  const handlecalluser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getoffer();
    socket.emit("user:call", { to: remotesockedid, offer });
    setmystream(stream);
  }, [ remotesockedid,socket]);
  const handleuserjoint = useCallback((data) => {
    const {id} = data;
    setremotesocketid(id);
  }, []);
  const calldenied = () => {
    setmystream(false);
    alert("call cut");
  };
  const handleincomingcall = useCallback(
    async ({ from, offer }) => {
      setremotesocketid(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video:true,
      });
      setmystream(stream);
      console.log(from, offer);
      const answer = await peer.getanswer(offer);
      socket.emit("call:accepted", { to: from, answer });
    },
    [socket]
  );
  const sendstreams = useCallback(() => {
    for (const track of mystream.getTracks()) {
      peer.peer.addTrack(track, mystream);
    }
  }, [mystream]);
  const handlecallaccepted = useCallback(
    async ({ from, answer }) => {
      peer.setLocalDescription(answer);
      console.log("call accepted");
      sendstreams();
    },
    [sendstreams]
  );
  useEffect(() => {
    socket.on("user:joined", handleuserjoint);
    socket.on("incoming:call", handleincomingcall);
    socket.on("call:accepted", handlecallaccepted);
    return () => {
      socket.off("user:joined", handleuserjoint);
      socket.off("incoming:call", handleincomingcall);
      socket.off("call:accepted", handlecallaccepted);
    };
  }, [socket, handleuserjoint, handleincomingcall, handlecallaccepted]);
  const [chatboxdisplay, setchatboxdisplay] = useState({ display: "none" });
  const Hanlechatbox = () => {
    setchatboxdisplay({ display: "block",
    width:"50%"
    });
    alert("chat box opened");
  };
  const handlechatboxclose = () => {
    setchatboxdisplay({ display: "none" });
    alert("chat box closed");
    document.getElementById("usermessage").innerHTML=""
  };
  let userchatbox={
    height:"250px",
    overflowY:"scroll"
  }
  // document.body.style.pa
  const sendmessage = () => {
    let message = document.getElementById("message").value;
    console.log(message);
     document.getElementById("usermessage").innerHTML+= `<h1 class="border border-1 border-primary p-3 rounded-3 ms-1 text-center h6 bg-black text-white" style="width:200px">${message}</h1>`;
     document.getElementById("message").value="";
  };
  let sendmessagebox = {
    position: "absolute",
    bottom: "0px",
    left: "0px",
    width:"100%"
  };
  let videocallbox ={
    width:'100%',
    height:"400px"
  }
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-danger bg-light ">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              UserInterFace
            </a>
            <ul className="nav">
              <li className="nav-item">
                <h4 className="nav-link">
                  {remotesockedid
                    ? "connected"
                    : "No person available in this room"}
                </h4>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div
        style={lobby}
        className="bg-dark text-white pt-3 pb-3 d-flex align-items-center"
      >
        {remotesockedid && (
          <>
            <div className="container">
              <div className="border border-3 border-white rounded-1 border-opacity-10 ">
                {mystream && (
                  <>
                    <div className="d-flex justify-content-between  pt-2 container border-bottom border-2 border-white border-opacity-10  bg-opacity-10">
                      <h1 className="h3 text-primary">My Stream</h1>
                      <h4>
                        <span className="h4 text-">Id.No- </span>
                        <span className="h4">
                          {remotesockedid.slice(0, 6) + "..."}
                        </span>{" "}
                        <span id="roomno"></span>
                      </h4>
                    </div>
                    <div className="d-flex justify-content-center">
                      <ReactPlayer
                        playing
                        muted
                        url={mystream}
                        style={videocallbox}
                      />
                      <div
                        className="bg-light border border-2 border-primary rounded-3 text-black position-relative"
                        style={chatboxdisplay}
                      >
                        <div className="d-flex justify-content-between container pt-2 pb-2 align-items-center border-bottom border-3 border-black rounded-2 mb-2 bg-primary border-opacity-25">
                          <h1 className="h4 text-white">Chat</h1>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={handlechatboxclose}
                          >
                            <i className="fa fa-close "></i>
                          </button>
                        </div>
                        <div id="usermessage" style={userchatbox} className="border-bottom border-black border-5 border-opacity-50"></div>
                        <div className="m-0 p-0">
                          <div className="d-flex border-bottom border-3 border-black" style={sendmessagebox}>
                            <input
                              type="text"
                              className="form-control"
                              id="message"
                              placeholder="enter message here"
                            />
                            <button
                              className="btn btn-primary"
                              onClick={sendmessage}
                            >
                              Send
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                <div className="text-center container border-top border-3 border-white rounded-1 border-opacity-25 pb-2 pt-2 bg-primary bg-opacity-50">
                  <button className="bg- rounded-2 " onClick={handlecalluser}>
                    <i class="fa fa-phone fa-2x text-primary"></i>
                  </button>
                  <button className="rounded-2 pe-2 ms-2" onClick={calldenied}>
                    <i
                      className="fa fa-phone fa-2x text-danger "
                      style={calldeclined}
                    ></i>
                  </button>
                  <button
                    className="rounded-2 pe-2 ms-2"
                    onClick={Hanlechatbox}
                  >
                    <i className=" fa  fa-comments fa-2x "></i>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
