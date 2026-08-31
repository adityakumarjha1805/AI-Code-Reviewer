import { useEffect, useState } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import axios from 'axios'
import CodeEditorLib from 'react-simple-code-editor'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './about.jsx'
import Contact from './contact.jsx'
import Markdown from 'react-markdown' // to use the markdown first we have to install npm i react-markdown



const Editor = CodeEditorLib?.default || CodeEditorLib

const Home = () => {
  
  const [code, setCode] = useState('')
  const [review, setReview] = useState(``)
  const [error, setError] = useState(``)

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  async function getReview() {
    setError(``)

    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { prompt: code })
      setReview(response.data)
    } catch (requestError) {
      setError(requestError.response?.data?.message || 'Unable to generate a review. Please try again.')
    }
    
  }
 

  return (
    <div>
      <div className="hero">
        <div className="left-hero">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(newCode) => setCode(newCode)}
              highlight={(source) => Prism.highlight(source, Prism.languages.javascript, 'javascript')}
              padding={10}
            />
          </div>
          <div onClick={getReview} className="button">Review</div>
        </div>
        <div className="right-hero">
          {error ? (
            <div className="error">{error}</div>
          ) : (
            <Markdown>{review}</Markdown>
          )}
        </div>
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
      <footer>
        <p>&copy; 2026 Code Reviewer. All rights reserved.</p>
        <p>Built with ❤️ for developers </p>

      </footer>

    </>





  )
}

export default App
