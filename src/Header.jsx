import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './global.css'
import './style.css'


const Header = () => {
  return (
    <>
      <div className=' text-xl flex align-middle justify-between p-10'>
        <h1 className='font-sans'> <i>Banquet</i></h1>

        <div className='flex text-base justify-between w-2/5'>
          <NavLink className={(e)=>(e.isActive ? "blue" : "")} to="/">HOME</NavLink>
          <NavLink className={(e)=>(e.isActive ? "blue" : "")}  to="/About">ABOUT US</NavLink>
          <NavLink className={(e)=>(e.isActive ? "blue" : "")}  to="/Services">SERVICES</NavLink>
          <NavLink className={(e)=>(e.isActive ? "blue" : "")}  to="/Blog">BLOG</NavLink>
        </div>

        <h2 className='text-4xl'>=</h2>
      </div>
    </>
  )
}

export default Header