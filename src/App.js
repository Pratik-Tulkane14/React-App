import Navbar from './MyAppComponent.js/Navbar';
import './App.css';
import AppForm from './AppForm';
import About from './MyAppComponent.js/About';
import React, { useState } from 'react'
import Alert from './Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
        const [mode, setMode] = useState('light');
        const [alert, setAlert] = useState(null);

        const showAlert = (message,type) =>{
            setAlert ({
              msg : message,
              type : type
            })
            setTimeout(() =>{
              setAlert(null);
            },1200)
        }

        const toggleMode = ()=>{
          if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = '#343434';
            showAlert("Dark mode has been enabled", "success");
          }
          else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "success");
          }
  }
  return (
    <>
    <Router>
        <Navbar title = "Pratik-Tech" nav1 = "Home" nav2 ="About" mode={mode}  toggleMode={toggleMode}/>
        <Alert alert ={alert}/>
        <div className="container my-3">
            <Routes>
                <Route path="/about"
                  element={<About />}>
                </Route>
                <Route path="/"
                  element={<AppForm showAlert={showAlert} heading = "Enter the text " mode={mode} />}>
                </Route>
            </Routes>
        </div>
    </Router>
    </>
  )
  }

export default App;

