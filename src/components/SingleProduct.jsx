import React, { use } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const SingleProduct = (props) => {

  
  
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addItemToCart({
      id: props.product.id,
      name: props.product.name,
      price: props.product.price
    }))
  }

  return (
    <div className='w-55 shadow-lg border border-gray-300 rounded-md p-3 flex flex-col gap-4'>
      <div>
        <img className='w-full h-40 object-cover' src={props.product.imgURL} alt={props.product.name} />
        <h1 className='text-lg font-semibold'>{props.product.name}</h1>
        <p className='text-gray-700 text-3xl'>${props.product.price}</p>
      </div>  
      <div className='flex justify-center '>
        <button onClick={addToCart} className='bg-blue-500 hover:opacity-70 text-white px-4 py-2 rounded-md'>Add to Cart</button>
      </div>
    </div>
  )
}

export default SingleProduct