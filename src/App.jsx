import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import ProductPage from './pages/productpage/ProductPage'
import ScentedCandle from './pages/scentedCandle/ScentedCandle'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <ScentedCandle/>
      <Footer/>
    </>
  )
}

export default App
