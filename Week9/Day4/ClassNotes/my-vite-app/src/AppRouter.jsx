import Home from "./components/Home"
import About from "./components/About"
import Shop from "./components/Shop"
import './App.css'
import Product from "./components/Products"
import Nav from "./components/Nav"

import {Route, Routes, Link } from 'react-router-dom'

function App() {

  return (
    <>
    <header>
      <nav>
      <Link to="/">Home</Link>{" "}
      <Link to="/About">About</Link>{" "}
      <Link to="/Shop">Shop</Link>
      </nav>
    </header>
      <Routes>
        <Route path="/" element={<Home title={'Dashbord'} />} />
        <Route path="/About" element={<About  />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      </>
  )
}

export default App

