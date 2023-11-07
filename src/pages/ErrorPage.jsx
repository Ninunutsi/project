import React from 'react'
import notFound from '../assets/not-found.png'
import { NavLink } from 'react-router-dom'


// for wildcard routes
const ErrorPage = () => {
  return (
    <main className='error-container'>
        <nav className='navigation'>
            <NavLink to="/" className='nav-link'>Home Page</NavLink>
            <NavLink to="registration" className='nav-link'>Registration</NavLink>
            <NavLink to="registration/form" className='nav-link'>Profile</NavLink>
        </nav>
      <img src={notFound} alt="404-not-found" />
    </main>
  )
}

export default ErrorPage
