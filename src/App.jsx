import React from 'react'
import { useSelector } from 'react-redux'
import Auth from './pages/Auth';
import Layout from './pages/Layout';

const App = () => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <div>
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  )
}

export default App