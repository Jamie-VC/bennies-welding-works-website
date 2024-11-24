import React from 'react'
import '../styles/HorizontalBox.css'

function HorizontalBox({header, content}) {
  return (
    <div className='horicard'>
      <div className="header">{header} </div>
      <div className="content">{content}</div>
    </div>
  )
}

export default HorizontalBox
