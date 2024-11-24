import React from 'react'
import Logo from '../assets/logo.png'
import '../styles/LogoBox.css'

function LogoBox() {
  return (
    <div className='imagecard'>
      <img src={Logo} />
    </div>
  )
}

export default LogoBox
