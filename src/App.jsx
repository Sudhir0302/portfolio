import { BrowserRouter, Routes } from "react-router-dom"
import Home from "./assets/Pages/Home"

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects" element={<Home />} />
          <Route path="/contacts" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
  