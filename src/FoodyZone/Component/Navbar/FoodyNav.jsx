import React from 'react'; 
import './FoodyNav.css';
const FoodyNav = () => {
  return (
    <>
    <header>
        <nav>
            <div className='upper'>
                <div className='logo'>
                    <h1>F<span>oo</span>dy Z<span>o</span>ne</h1>
                </div>
                <div className='search-box'>
                    <p>Search Food...</p>
                </div>
            </div>
                <ul className='bottom'>
                    <li>All</li>
                    <li>BreakFast</li>
                    <li>Lunch</li>
                    <li>Dinner</li>
                </ul>
            
        </nav>
    </header>
    </>
  )
}

export default FoodyNav
