import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/homeCard.css'

function HomeCard({ icon: Icon, text, to }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <div className="card" onClick={handleClick} style={{ cursor: 'pointer' }}>
    <div className="icon">
      <Icon size={80} />
    </div>
    <div className="text">{text}</div>
  </div>
  )
}

export default HomeCard
