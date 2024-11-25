import React from 'react'
import Background from '../assets/welding.png'
import { GrProjects, GrServices } from "react-icons/gr";
import { FaIndustry } from "react-icons/fa";
import '../styles/Home.css'
import Card from '../components/HomeCard'

function Home() {
  return (
    <div className='page'>
      <div className='home' style={{ backgroundImage: `url(${Background})`}}>
        <h1 className="site-title"> Bennies Welding Works </h1>
        <div className='headerContainer'>
          <h1> We have Been Around For Approximately 50 Years, Servicing A Broad Base Industry.</h1>
          <button> Request a quote </button>
        </div>
      </div>
      <div className='bottom' style={{ display: 'flex', gap: '125px', justifyContent: 'center', marginTop: '0px', paddingTop: '150px' }}>
        <Card icon={GrProjects} text="Projects" to="/projects"/>
        <Card icon={GrServices} text="Services" to="/projects"/>
        <Card icon={ FaIndustry} text="Industries" to="/projects"/>
      </div>
    </div>
  )
}

export default Home
