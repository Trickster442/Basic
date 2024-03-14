import React from 'react'
import Navbar from './Navbar'
import BookList from './Booklist'
import './Context.css'
const Context = () => {
  return (
    <div className='App'>
      <Navbar/>
      <BookList/>
    </div>
  )
}

export default Context
