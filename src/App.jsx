import './App.css';
import { Navbar, Home, About, Login, Signup } from '../src/components'
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NoteState from './context/notes/NoteState';


function App() {
  if (!navigator.onLine) {
    alert('Please check your internet connection')
  }

  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <div className="container my-3">
            <Routes>
              <Route path="/" element={<Home />}>
              </Route>
              <Route path="/about" element={<About />}>
              </Route>
              <Route path="/login" element={<Login />}>
              </Route>
              <Route path="/signup" element={<Signup />}>
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  )
}

export default App
