import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <FaFacebookF style={{fontSize: 24, color: 'white', paddingLeft: 50}}/>
      <FaLocationDot style={{fontSize: 24, color: 'white', paddingLeft: 25}}/>
    </div>
  )
}

export default Footer
