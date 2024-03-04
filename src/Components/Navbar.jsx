import React from 'react'
import img from '../Components/images/brand_logo.png'
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='logo'>
            <img src={img} alt='Brand Logo'/>
        </div>

        <ul>
            <li href='#'>Menu</li>
            <li href='#'>Location</li>
            <li href='#'>About</li>
            <li href='#'>Contact</li>
        </ul>


        <button>Login</button>
      </nav>
    </div>
  )
}

export default Navbar
