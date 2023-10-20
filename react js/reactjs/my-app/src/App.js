
import Navbar from "./components/miniproject/text utilise/Navbar";
import Usestates from "./components/miniproject/text utilise/Usestates";
import About from "./components/miniproject/text utilise/About";
import React, { useState } from "react";
import Alert from "./components/miniproject/text utilise/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("white");
  const [text, settext] = useState("Enable dark mode");
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const togllechange = () => {
    if (mode === "dark") {
      setmode("white");
      settext("Switch on dark mode");
      document.body.style.backgroundColor = "white";
      showalert("light mode activated", "success");
    } else {
      setmode("dark");
      settext("Switch off dark mode");
      document.body.style.backgroundColor = "black";
      showalert("Dark mode activated", "success");
    }
  };
  return (
    <Router>
      <div>
        <Navbar
          title="Textutilils"
          home="Home"
          Aboutus="About us"
          mode={mode}
          text={text}
          toggleclick={togllechange}
        />
        <Alert alert={alert} />
        {/* <Props title="Props In React" description="Description" /> */}
        <Switch>
          <Route path="/about">
            <About alert={showalert} />
          </Route>
          <Route path="/">
            <Usestates header="Enter your text here" alert={showalert} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
