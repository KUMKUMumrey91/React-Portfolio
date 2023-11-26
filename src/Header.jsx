import React from 'react'
import { Link } from 'react-router-dom';
import './global.css'

const Header = () => {
  return (
    <>
      <div className='bg-red-300'>
        <h1>logo</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Blog">Blog</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
    </>
  )
}

export default Header