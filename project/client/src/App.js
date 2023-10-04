import Roompage from "./components/context/room";
import Signup from "./components/signup";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/room/:roomid" element={<Roompage/>}/>
      </Routes>
    </>
  );
}

export default App;
