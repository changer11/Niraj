import { React, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import Navbar from "./components/Navbar";
import CombinedAlldata from "./components/proclinic/CombinedALLdata";
function App() {
  const [pagetitle, settitle] = useState("Quick Statistics");
  const [pageheader, setpageheader] = useState("");
  const [navheadervisiblity, SetNavheadervisiblity] = useState("block");
  const [navwidth, setnavwidth] = useState("w-[270px]");
  const [fontsize, setfontsize] = useState("text-[17px] w-6");
  const [mobileview, setmobileview] = useState("hidden");
  const [dispalyreverse, setdisplayreverse] = useState("");
  const [islogin, setislogin] = useState("");
  const menuChange = () => {
    if (navheadervisiblity === "hidden") {
      SetNavheadervisiblity("block");
      setnavwidth("w-[270px]");
      setfontsize("text-[17px] w-6");
      setmobileview("block");
    } else {
      SetNavheadervisiblity("hidden");
      setnavwidth("w-[70px]");
      setfontsize("text-[30px] text-center w-full");
      setmobileview("hidden");
    }
  };
  return (
    <>
      <BrowserRouter>
        <div className={`flex ${dispalyreverse} bg-slate-200`}>
          <Navbar
            settitle={settitle}
            navheadervisiblity={navheadervisiblity}
            navwidth={navwidth}
            fontsize={fontsize}
            setheadertitle={setpageheader}
            mobileview={mobileview}
            SetNavheadervisiblity={SetNavheadervisiblity}
            setdisplayreverse={setdisplayreverse}
            dispalyreverse={dispalyreverse}
            setislogin={setislogin}
            islogin={islogin}
          />
          <div className="w-[100%] h-[100vh] overflow-y-scroll no-scrollbar">
            <Header
              setheadertitle={setpageheader}
              settitle={settitle}
              Title={pagetitle}
              event={menuChange}
              header_title={pageheader}
              islogin={islogin}
            />
            <CombinedAlldata setloginmode={setislogin} />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
