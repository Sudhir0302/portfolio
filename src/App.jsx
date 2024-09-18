import { BrowserRouter, Routes,Route  } from "react-router-dom"
import Home from "./assets/Pages/Home"
import Projects from "./assets/Pages/Projects"
import { Contact } from "lucide-react"
import Navbar from "./assets/components/Navbar"

function App() {
 
  return (
    <>
      <div style={{ background: 'linear-gradient(to right, #eef2f3, #8e9eab)', minHeight: '100vh', margin: 0 }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
  