import React, { useState } from "react";

export default function TextForm(props) {
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    navigator.clipboard.writeText(text.value);
    props.showAlert("The text has been copied to clipboard!", "success")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("The extraspaces has been removed!", "success")
  }

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("The text has been converted to UpperCase!", "success")
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("The text has been converted to LowerCase!", "success")
  }
  const handleClr = () => {
    let newText = '';
    setText(newText)
    props.showAlert("The text has been cleared!", "success")
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <div className="mb-3">
          <h3 className="form-label mb-4">
            {props.heading}
          </h3>
          <textarea
            id="myBox"
            placeholder="Enter text here..."
            value={text}
            onChange={handleOnChange}
            className="form-control resize"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleClr}>Clear Text</button>

        <div className="container my-4">
          <h3>Your Text Summary</h3>
          <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words, {text.length} Characters</p>
          <p>Time to Read: {0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length.toFixed(2)} minutes or {0.48 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length.toFixed(2)} seconds</p>
          {/* <h3>Preview:</h3>
          <p>{text.length > 0 ? text : "Please enter the text to preview"}</p> */}
        </div>
      </div>
    </>
  );
}
