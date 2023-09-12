import { useState } from "react";
export default function Usestates(probs) {
  const [text, settext] = useState("Enter text here");
  // text="enter text"; WRONG way to change the state
  // settext=("Enter text"); right way to change to state
  const buttonclicked=()=>{
    let newtext = text.toUpperCase();
    settext(newtext);
  };
  const textchange=(event)=> {
    console.log("hello");
    settext(event.target.value);
  };

  return (
    <div className="container mt-3">
      <h1 className="h3 ">{probs.header}</h1>
      <textarea
        name=""
        id="text"
        cols="100"
        rows="10"
        value={text}
        onChange={textchange}
      className="rounded-2 border border-0" ></textarea>
      <button className="btn btn-primary mt-5" type="button" onClick={buttonclicked}>
        <label htmlFor="text">Convert text uppercase</label>
      </button>
    </div>
  );
}
