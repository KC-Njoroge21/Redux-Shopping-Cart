import React from 'react'
import DUMMY_PRODUCTS from './Products'

const ProductItem = () => {

  const products = DUMMY_PRODUCTS.map((product) => {
    return (
      <div key={product.id}>
        <h1>{product.name}</h1>
        <img src={product.imgURL} alt={product.name} />
        <p>{product.price}</p>
      </div>  
    )
  })

  return (
    <div>{products}</div>
  )
}

export default ProductItem