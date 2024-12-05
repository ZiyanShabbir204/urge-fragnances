import React from 'react'
import Lavendar from "../../assets/images/scentedcandles/lavendar.png"
import Mulbery from "../../assets/images/scentedcandles/mulbery.png"
import Ocean from "../../assets/images/scentedcandles/ocean.png"
import Oud from "../../assets/images/scentedcandles/oud.png"
import Thandi from "../../assets/images/scentedcandles/thandi.png"
import ProductCard from '../ProductCard'


const Products = () => {
    const  products = [ {
        name: "Lavender Scented ",
        price: 2700.00,
        image : Lavendar
    },
    {
        name: "Thandi Shaam",
        price: 2700.00,
        image : Thandi
    },
    {
        name: "Ocean",
        price: 3400.00,
        image : Ocean
    },
    {
        name: "Mulberry",
        price: 3600.00,
        image : Mulbery
    },
    {
        name: "Oud",
        price: 3500.00,
        image : Oud
    },]
  return (
    <div className='p-6 bg-white-100'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
            {products.map((value,indx)=> <ProductCard key={indx} image={value.image} price={value.price} name={value.name}/>)}
            {products.map((value,indx)=> <ProductCard key={indx} image={value.image} price={value.price} name={value.name}/>)}

        </div>

    </div>
  )
}

export default Products