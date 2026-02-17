import React from 'react'
import DUMMY_PRODUCTS from './Products'
import SingleProduct from './SingleProduct'

const ProductItem = () => {

  const products = DUMMY_PRODUCTS.map((product, index) => {
    return (
      <SingleProduct key={index} product={product} />
    )
  })

  return (
    <div className='flex flex-wrap gap-20 justify-center'>{products}</div>
  )
}

export default ProductItem