import React from 'react'
import {useEffect , useState} from 'react'
import "prismjs/themes/prism-tomorrow.css" // we have to install prismjs from terminal using npm install prismjs
import Prism from "prismjs"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './about.jsx'
import Contact from './contact.jsx'




const Home = () => {
  useEffect(() => {
    Prism.highlightAll()
  
})
  
  return (
    <div>
     <div className="hero">
      <div className="left-hero">
        <div className="code"></div>
        <div className="button">Review</div>
      </div>
      <div className="right-hero"></div>
     </div>
    </div>
  )
}




function App() {
  return (
    <>
    <BrowserRouter>
      <nav className="nav">
        <div className="logo">Code Reviewer</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

    </>
   
    
   
  

  )
}

export default App
