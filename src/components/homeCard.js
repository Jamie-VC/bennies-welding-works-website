import React from 'react'
import '../styles/homeCard.css'

function homeCard({ icon: Icon, text }) {
  return (
    <div className="card">
    <div className="icon">
      <Icon size={80} />
    </div>
    <div className="text">{text}</div>
  </div>
  )
}

export default homeCard
