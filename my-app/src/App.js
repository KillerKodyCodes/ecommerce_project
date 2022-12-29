import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Products from "./pages/Products"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"

function App() {
  return (
    <>
      <Navbar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
      <Footer/>
    </>
  )
}

export default App