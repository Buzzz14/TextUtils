import React, { useState } from "react";

export default function TextForm(props) {
  const handleCopy = () => {
    let newText = document.getElementById('myBox');
    newText.select();
    navigator.clipboard.writeText(newText.value);
    if (text.length > 0) {
      props.showAlert("The text has been copied to clipboard!", "success")
    }
    else
      props.showAlert("Please enter the text first!!!", "danger")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    if (text.length > 0) {
      props.showAlert("The extraspaces has been removed!", "success")
    }
    else
      props.showAlert("Please enter the text first!!!", "danger")
  }

  // const words = text.split(/\s+/).filter(Boolean);

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    if (text.length > 0) {
      props.showAlert("The text has been converted to UpperCase!", "success")
    }
    else
      props.showAlert("Please enter the text first!!!", "danger")
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    if (text.length > 0) {
      props.showAlert("The text has been converted to LowerCase!", "success")
    }
    else
      props.showAlert("Please enter the text first!!!", "danger")
  }
  const handleClr = () => {
    let newText = '';
    setText(newText)
    if (text.length > 0) {
      props.showAlert("The text has been cleared!", "success")
    }
    else
      props.showAlert("Please enter the text first!!!", "danger")
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <div className="mb-3">
          <h3 className="form-label">
            {props.heading}
          </h3>
          <textarea
            id="myBox"
            // placeholder="Enter text here..."
            value={text}
            onChange={handleOnChange}
            className="form-control resize"
            rows="8"
          // style={{backgroundColor: props.mode === 'dark'? 'grey':'white', color: props.mode === 'dark'? 'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary m-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary m-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary m-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary m-2" onClick={handleClr}>Clear Text</button>

        <div className="container my-4">
          <h3>Your Text Summary</h3>
          <p>{text.split(" ").length - 1} Words, {text.length} Characters</p>
          <p>Time to Read: {0.008 * text.split(" ").length.toFixed(2)} minutes or {0.48 * text.split(" ").length.toFixed(2)} seconds</p>
          <h3>Preview:</h3>
          <p>{text.length > 0 ? text : "Please enter the text to preview"}</p>
        </div>
      </div>
    </>
  );
}
