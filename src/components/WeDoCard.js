import React from 'react';
import '../styles/WeDoCard.css';

function WeDoCard({ text }) {
  return (
    <div className="wedocard">
      <div className="header">
        <h1>What we do:</h1>
      </div>
      <div className="content">{text}</div>
    </div>
  );
}

export default WeDoCard;
