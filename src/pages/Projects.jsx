import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Services = () => {
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault()
    console.log("form submitted ")
    navigate(`/product/${e.target[0].value}`)
  }

  return (
    <div>
      <h1>FORM</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='username' className='border-zinc-900 border-2 m-2' />
        <input type="password" placeholder='password' className='border-zinc-900 border-2 m-2 ' />
        <button className='bg-white '>Submit</button>
      </form>
      <hr />
    <Outlet/>
    </div>
  )
}

export default Services