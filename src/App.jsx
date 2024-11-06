import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      showAlert("Dark Mode has been disabled...", "success")
      document.body.style.backgroundColor = 'white'
    }
    else {
      setMode('dark');
      showAlert("Dark Mode has been enabled...", "success")
      document.body.style.backgroundColor = '#2C3238'
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Text-Master" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try Text-Master - Word Counter, Character Counter, LowerCase to UpperCase, UpperCase to LowerCase, Remove ExtraSpaces" mode={mode} />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </div>
        <Footer mode={mode}/>
      </Router>
    </>
  );
}

export default App;
