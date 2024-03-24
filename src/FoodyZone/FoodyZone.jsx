import React from 'react'
import FoodyNav from './Component/Navbar/FoodyNav'
import Hero from './Component/Item/Hero'
import './FoodyZone.css'
const FoodyZone = () => {
  return (
    <div className='container'>
      <FoodyNav/>
      <Hero/>
    </div>
  )
}

export default FoodyZone
