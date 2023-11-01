import './App.css';
import { Navbar, TextForm } from '../imports'
import About from './components/About/About';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {


  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(12 26 51)'
      document.body.style.color = 'white'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route path='/' element={
              <TextForm heading="TextUtils - Copytext | UpperCase to LowerCase | LowerCase to UpperCase | Captilize Text" mode={mode} />}>
            </Route>
            <Route path="/about" element={<About mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
