import { Route, Routes, Link } from "react-router-dom"
import Home from './Home'
import Drinks from "./drinks/Drinks"
import Snacks from "./snacks/Snacks"

function App() {

  return (
    <>
      <div style={{borderBottom: "3px solid black", textAlign: "center"}}>
        <Link to="/" style={{textDecoration: "None"}}>Home</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="drinks" element={<Drinks />} />
        <Route path="snacks" element={<Snacks />} />
      </Routes>
    </>
  )
}

export default App
