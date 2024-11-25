import React from 'react'
import '../styles/HomeCircles.css'

function HomeCircles({icon:Icon, text}) {
  return (
    <div className='circle'>
        <div className='icon'>
            <Icon size={50} />
        </div>
        <div className='text'> {text} </div>
    </div>
  )
}

export default HomeCircles
