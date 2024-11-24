import React from 'react'
import '../styles/About.css'
import Stat from '../components/StatCard'
import WeDoCard from '../components/WeDoCard'
import LogoBox from '../components/LogoBox'
import Hori from '../components/HorizontalBox'

function About() {
  return (
    <div className='about'>

      <div className='header'>
        <h1 className='aboutitle'>About</h1>
      </div>
      <div className='about-content'>
        <div className='logo-box'>
            <LogoBox />
          </div>
          <div className='stat-card'>
            <Stat number="50" text="years" />
            <Stat number="1000+" text="projects" />
            <Stat number="+-50" text="staff" />
            <Stat number="10+" text="cranes" />
          </div>
          <div className='we-do-card'>
            <WeDoCard text="We specialize in welding, custom metalwork, and more. Our services are tailored to your needs with precision and care" />
          </div>
          <div className='hori-card'>
            <Hori header="Terry Davies" content="We specialize in welding, custom metalwork, and more. Our services are tailored to your needs with precision and care" />
            <Hori header="Terry's Accomplishments" content="We specialize in welding, custom metalwork, and more. Our services are tailored to your needs with precision and care" />
         
          </div>
        </div>
    </div>
  )
}

export default About
