import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth-slice';

const Auth = () => {

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    
    e.preventDefault();

    // dispatch login action here

    dispatch(authActions.login());
   



  }

  return (
    <div className='p-6'>
      
      <form className='w-1/3 min-w-75 mx-auto shadow border border-amber-200 p-3 flex flex-col gap-4' action="" onSubmit={handleSubmit}>
      <h1 className='text-center text-3xl font-semibold'>Authentication Page</h1>
        <div className='flex flex-col'>
          <label className='text-lg' htmlFor="id">Id:</label>
          <input className='outline-0 border border-gray-300 p-2 rounded-sm' type="text" name="id" id="id" />
        </div>

        <div className='flex flex-col'>
          <label className='text-lg' htmlFor="password">Password:</label>
          <input className='outline-0 border border-gray-300 p-2 rounded-sm' type="password" name="password" id="password" />
        </div>

        <button className='bg-amber-500 font-semibold text-lg text-white p-2 rounded-sm' type="submit">Login</button>
      </form>
    </div>
  )
}

export default Auth