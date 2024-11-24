import React from 'react'
import '../styles/StatCard.css'

function StatCard({number, text}) {
  return (
    <div className='statcard'>
      <div className="number">{number}</div>
      <div className="category">{text}</div>
    </div>
  )
}

export default StatCard
