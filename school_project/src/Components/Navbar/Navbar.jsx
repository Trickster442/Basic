import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header>
        <nav>
            <div>
                <img src='/' alt='logo'/>
            </div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
