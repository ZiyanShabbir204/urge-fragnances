import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import ProductPage from './pages/productpage/ProductPage'
import ScentedCandle from './pages/scentedCandle/ScentedCandle'

function App() {

  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route exact path="/" element={<Home></Home>}></Route>
      <Route exact path="/scentedCandle" element={<ScentedCandle></ScentedCandle>}></Route>
      <Route exact path="/productpage" element={<ProductPage></ProductPage>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
