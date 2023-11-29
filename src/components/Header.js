import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <Link to='/profile'className='navbar-brand me-5'>Profile</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to='/' className='nav-link'>Home</Link>
                </li>
                <li className="nav-item">
                  <Link to='/about' className='nav-link'>About</Link>
                </li>
                <li className="nav-item d-flex ">
                  <Link to='/services' className='nav-link'>Service</Link>
                </li>
                <li className="nav-item">
                  <Link to='/event' className='nav-link'>Event</Link>
                </li>
                <li className="nav-item">
                  <Link to='/gallery' className='nav-link'>Gallery</Link>
                </li>
                <li className="nav-item d-flex ">
                  <Link to='/contact' className='nav-link'>Contact</Link>
                </li>
              </ul>
              </div>
            </div>
        </nav>
    </div>
  )
}

export default Header
