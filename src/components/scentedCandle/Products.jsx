import React from 'react'

import ProductCard from '../ProductCard'


const Products = ({ product, type }) => {
  return (
    <div className='p-6 my-6 bg-white-100'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-6 md:gap-y-12 sm:gap-x-6 xl:gap-x-8'>
        {product.map((value, indx) => <ProductCard key={indx} img1={value.sizes[0]?.img1} price={value?.sizes[0]?.price} name={value?.name} type={type} />)}
      </div>

    </div>
  )
}

export default Products