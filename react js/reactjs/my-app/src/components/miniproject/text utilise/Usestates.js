import { useState } from "react";
export default function Usestates(probs) {
  const [text, settext] = useState("");
  // text="enter text"; WRONG way to change the state
  // settext=("Enter text"); right way to change to state
  const buttonclicked = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    probs.alert("converted in uppercase", "success");
  };
  const buttonlower = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    probs.alert("converted in lowercase", "success");
  };
  const clear = () => {
    let newtext = "";
    settext(newtext);
    probs.alert("cleared", "success");
  };
  const Handleoncopy = () => {
    let newtext = document.getElementById("text");
    newtext.select();
    newtext.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(newtext.value);
    probs.alert("copied", "success");
  };
  const Handleonspace = () => {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
    probs.alert("space removed", "success");
  };
  const textchange = (event) => {
    settext(event.target.value);
  };

  return (
    <>
      <div className="text-center bg-danger container rounded-3 pb-2 pt-2 mt-2 h3">
        <p className="text-white p-0 m-0">welcome to React page</p>
      </div>
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
            className="rounded-2 ps-2"
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
            <button
              className="btn btn-primary ms-2 mt-1"
              type="button"
              onClick={clear}
            >
              <label htmlFor="text">Clear data</label>
            </button>
            <button
              className="btn btn-primary ms-2 mt-1"
              type="button"
              onClick={Handleoncopy}
            >
              <label htmlFor="text">copydata</label>
            </button>
            <button
              className="btn btn-primary ms-2 mt-1"
              type="button"
              onClick={Handleonspace}
            >
              <label htmlFor="text">Clear space</label>
            </button>
          </div>
        </div>
        <div className="mt-2 ">
          <h1 className="h3">Summary</h1>
          <p>
            <b className="pe-2">
              {text.split(" ").filter((element) => {return element.length !== 0;}).length}</b>
            words
            <b className="pe-2">{text.length}</b>Characters
          </p>
          <h2 className="h3">Preview</h2>
          <p>{text.length > 0 ? text : "please write something"}</p>
        </div>
      </div>
    </>
  );
}
