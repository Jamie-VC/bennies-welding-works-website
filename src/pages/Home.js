import React from 'react'
import Background from '../assets/welding.png'
import { GrProjects, GrServices } from "react-icons/gr";
import { FaIndustry } from "react-icons/fa";
import '../styles/Home.css'
import Card from '../components/HomeCard'
import Ciricle from '../components/HomeCircles'

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
      <div className='bottom' style={{ display: 'flex', gap: '125px', justifyContent: 'left', marginTop: '0px', paddingTop: '50px', paddingLeft: '60px'}}>
        <Card icon={GrProjects} text="Projects" to="/projects"/>
      </div>
      <div className='homeservices'>
        <h1> Services </h1>
        <div className='serviceicons'>
          <Ciricle icon={GrServices} text="Speacilized welding"/>
          <Ciricle icon={GrServices} text="Speacilized welding"/>
          <Ciricle icon={GrServices} text="Speacilized welding"/>
        </div>
      </div>
      <div className='homeindustries'>
        <h1> Industries </h1>
        <div className='industryicons'>
          <Ciricle icon={FaIndustry} text="Industrial"/>
          <Ciricle icon={FaIndustry} text="Industrial"/>
          <Ciricle icon={FaIndustry} text="Industrial"/>
        </div>
      </div>
    </div>
  )
}

export default Home
