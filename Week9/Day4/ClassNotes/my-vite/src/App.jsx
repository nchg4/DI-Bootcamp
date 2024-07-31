import './App.css'
import Shop from './components/Shop'
import Product from './components/Product'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Shop />} />
      <Route path='/product/:id' element={<Product />} />
    </Routes>
    </>
  )
}

export default App