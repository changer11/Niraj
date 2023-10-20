import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import Navbar from "./components/Navbar";
function App() {
  const [pagetitle, settitle] = useState("Quick Statistics");
  const [pageheader, setpageheader] = useState("");
  const [navstyle, setnavstyle] = useState("block");
  const [navwidth, setnavwidth] = useState("w-[270px]");
  const [fontsize, setfontsize] = useState("text-[17px] w-6");
  const [mobileview, setmobileview] = useState("hidden");
  const [dispalyreverse,setdisplayreverse] = useState("")
 const menuChange = () => {
      if (navstyle === "hidden") {
        setnavstyle("block");
        setnavwidth("w-[270px]");
        setfontsize("text-[17px] w-6");
        setmobileview("block");
      } else {
        setnavstyle("hidden");
        setnavwidth("w-[70px]");
        setfontsize("text-[30px] text-center w-full");
        setmobileview("hidden");
      }
  };
console.log(dispalyreverse);
  return (
    <>
      <div className={`flex ${dispalyreverse}`}>
        <Navbar
          settitle={settitle}
          navstyle={navstyle}
          navwidth={navwidth}
          fontsize={fontsize}
          setheadertitle={setpageheader}
          mobileview={mobileview}
          SetNavStyle={setnavstyle}
          setdisplayreverse={setdisplayreverse}
        />
        <Header
          Title={pagetitle}
          event={menuChange}
          header_title={pageheader}
        />
      </div>
    </>
  );
}

export default App;
