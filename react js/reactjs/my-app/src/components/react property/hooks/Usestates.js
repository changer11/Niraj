import { useState } from "react";
export default function Usestates(probs) {
  const [text, settext] = useState("");
  // text="enter text"; WRONG way to change the state
  // settext=("Enter text"); right way to change to state
  const buttonclicked = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
  };
  const buttonlower = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    document.getElementById("text").value="";
  };
  const textchange = (event) => {
    settext(event.target.value);
  };

  return (
    < >
    <div className="container mt-3 pt-2 pb-2 ps-5 text-white rounded-2 ">
    <div className="mt-3">
        <h1 className="h3 ">{probs.header}</h1>
        <textarea
          name=""
          id="text"
          cols="100"
          rows="10"
          value={text}
          onChange={textchange}
          className="rounded-2 ps-2 border border-0"
        ></textarea>
        <div>
          <button
            className="btn btn-primary mt-1"
            type="button"
            onClick={buttonclicked}
          >
            <label htmlFor="text">Convert text uppercase</label>
          </button>
          <button
            className="btn btn-primary ms-2 mt-1"
            type="button"
            onClick={buttonlower}
          >
            <label htmlFor="text">Convert text Lowercase</label>
          </button>
        </div>
      </div>
      <div className="mt-2 ">
        <h1 className="h3">Summary</h1>
        <p>
          <b className="pe-2">{text.split(" ").length-1}</b>words <b className="pe-2">{text.length}</b>Characters
        </p>
        <h2 className="h3">Preview</h2>
        <p>{text}</p>
      </div>
    </div>
    </>
  );
}
