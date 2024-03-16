import React, {link} from 'react'
import logo from '../Images/logo.png'
import {FiSearch} from 'react-icons/fi'
import {FaShoppingCart} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import './Navbar.css'
const Navbar = () => {
  return (
    <header>
      <div className='logo'>
        <img src={logo} alt='logo'/>
      </div>
      <ul>
        <a href='home'>
          <li href='#'>Home</li>
        </a>
        <a href='about'>
        <li>About</li>
        </a>
        <a href='Menu'>
        <li>Menu</li>
        </a>
        <a href='Products'>
        <li>Products</li>
        </a>
        <a href='Review'>
        <li>Review</li>
        </a>
        <a href='Contact'>
        <li>Contact</li>
        </a>
        <a href='Blogs'>
        <li>Blogs</li>
        </a>
      </ul>
      <div className='icons'>
        <button>
          <FiSearch/>
          </button>
        <button>
          <FaShoppingCart/>
        </button>

        <button> 
          <GiHamburgerMenu/>
        </button>
      </div>
    </header>
  )
}

export default Navbar
