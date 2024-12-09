import React from 'react'

import ProductCard from '../ProductCard'


const Products = ({products}) => {
 
  return (
    <div className='p-6 bg-white-100'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
            {products.map((value,indx)=> <ProductCard key={indx} image={value.image} price={value.price} name={value.name}/>)}
        </div>

    </div>
  )
}

export default Products