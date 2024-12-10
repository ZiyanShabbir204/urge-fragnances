import React from 'react'
import Product from '../../components/productpage/Product'
import CandleCare from '../../components/productpage/CandleCare'
import { useSearchParams } from 'react-router-dom'

const ProductPage = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  return (
    <>
    <Product></Product>
    {type=="scentedCandle"&&<CandleCare></CandleCare>}
    </>
  )
}

export default ProductPage
