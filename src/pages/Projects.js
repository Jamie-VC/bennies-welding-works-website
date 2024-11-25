import React from 'react'
import Makro from '../assets/projectgallery/makroproject.png'
import '../styles/Projects.css'

function Projects() {
  return (
    <div className='projectspage'>
      
        <div className='overview' style={{ backgroundImage: `url(${Makro})`}}>
            <h1> Provide a brief introduction about the types of projects completed 
                (e.g., commercial buildings, warehouses, industrial plants).</h1>
        </div>

        <div className='prjectsgallery'>
          <h1> Gallery </h1>

        </div>

        <div className='casestudies'>
          <h1> Case Studies </h1>
        </div>

    </div>
  )
}

export default Projects
