import React from 'react'
import { Link } from 'react-router-dom'
import "./MainLayout.css"

const MainLayout = () => {
  return (
    <div>
      <h2>Welcome to Home page</h2>
      <nav>
        <ul className='aa'>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MainLayout