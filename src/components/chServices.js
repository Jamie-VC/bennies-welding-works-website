import React from 'react'
import '../styles/chServices.css'

function chServices({servicetext}) {
  return (
    <div className='servicebox'>
      <div className='servicetext'> {servicetext} </div>
    </div>
  )
}

export default chServices
