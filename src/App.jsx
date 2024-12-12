import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import ProductPage from './pages/productpage/ProductPage'
import ScentedCandle from './pages/scentedCandle/ScentedCandle'
import PerfumePage from './pages/PerfumePage/PerfumePage'
import Checkout from './pages/checkout/Checkout'
import PerfumeWax from './pages/perfume wax/PerfumeWax'
import ScrollToTop from './components/ScrollToTop'
import Spinwheel from './components/Spinwheel'

function App() {

  return (
    <BrowserRouter>
    <ScrollToTop></ScrollToTop>
    <Navbar></Navbar>
    <Routes>
      <Route exact path="/" element={<Home></Home>}></Route>
      <Route exact path="/scentedCandle" element={<ScentedCandle></ScentedCandle>}></Route>
      <Route exact path="/perfume" element={<PerfumePage></PerfumePage>}></Route>
      <Route exact path="/perfumeWax" element={<PerfumeWax></PerfumeWax>}></Route>
      <Route exact path="/productpage" element={<ProductPage></ProductPage>}></Route>
      <Route exact path="/checkout" element={<Checkout></Checkout>}></Route>
      {/* <Route exact path="/spin" element={<Spinwheel></Spinwheel>}></Route> */}
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
