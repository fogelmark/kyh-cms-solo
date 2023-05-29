import React, { useContext, useEffect, useState } from 'react'
import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import { BsFillBoxFill } from "react-icons/bs"
import { UserContext } from '../../context/UserContext'

const Navbar = () => {

  const { user, setUser } = useContext(UserContext)

  const handleLogout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/"><BsFillBoxFill /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/products">Products</NavLink>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Product Management
              </span>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/add">Add Product</Link></li>
                {/* <li><Link className="dropdown-item" to="/edit">Edit Product</Link></li>
                <li><Link className="dropdown-item" to="/delete">Delete Product</Link></li> */}
              </ul>
            </li>
            {user ? (
              <>
                <li className='nav-item my-auto'>
                  <button className='btn btn-danger btn-sm' onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/login">Login</NavLink>
                </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar