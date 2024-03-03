import { React, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import Navbar from "./components/Navbar";
import CombinedAlldata from "./components/proclinic/CombinedALLdata";
function App() {
  const [NavVisiblity, SetNavVisiblity] = useState("block");
  const [navwidth, setnavwidth] = useState("w-[270px]");
  const [fontsize, setfontsize] = useState("text-[17px] w-6");
  const [mobileview, setmobileview] = useState("hidden");
  const [dispalyreverse, setdisplayreverse] = useState("");
  const menuChange = () => {
    if (NavVisiblity === "hidden") {
      SetNavVisiblity("block");
      setnavwidth("w-[270px]");
      setfontsize("text-[17px] w-6");
      setmobileview("block");
    } else {
      SetNavVisiblity("hidden");
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
            NavVisiblity={NavVisiblity}
            navwidth={navwidth}
            fontsize={fontsize}
            mobileview={mobileview}
            SetNavVisiblity={SetNavVisiblity}
            setdisplayreverse={setdisplayreverse}
            dispalyreverse={dispalyreverse}
          />
          <div className="w-[100%] h-[100vh] overflow-y-scroll no-scrollbar">
            <Header event={menuChange} />
            <CombinedAlldata />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
