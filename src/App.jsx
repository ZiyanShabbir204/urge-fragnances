import './App.css'
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
      <ProductPage></ProductPage>
    </>
  )
}

export default App
