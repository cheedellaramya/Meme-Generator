import React from 'react'
import logo from '../assets/images/meme-image.jpg'
const Header = () => {
  return (
    <div>
      <header className='header'>
        
          <img className='header-image' src={logo} alt='loading...'/>
          <h1 className='header-title'>Meme Generator</h1>
        <h4 className='header-project'>React Course - Project 3</h4>
      </header>
    </div>
  )
}

export default Header;
