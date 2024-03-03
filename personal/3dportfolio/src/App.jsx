import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useState } from "react";
function App() {
  const [Active,setActive] =useState('');
  console.log(Active);
  return (
    <BrowserRouter>
      <div className="bg-primary pb-28 w-full">
          <Navbar Active={Active}  setActive={setActive}/>
        <Routes>
          <Route path="/" element={
           <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center h-screen ">
           <Hero   setActive={setActive}/>
         </div>}/>
          <Route path="/about" element={<About Active={Active}  setActive={setActive}/>} />
          <Route
            path="/work"
            element={
              <>
                <Experience />
                 <Tech  setActive={setActive}/>
              </>
            }
          />
          <Route path="/project" element={<> <Works setActive={setActive} />
         </>}/>
          <Route
            path="/contact"
            element={
              <div className="relative z-0">
                <Contact Active={Active}  setActive={setActive}/>
                <StarsCanvas />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
