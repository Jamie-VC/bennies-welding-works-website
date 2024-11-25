import React from 'react'
import Makro from '../assets/projectgallery/makroproject.png'
import Hori from '../components/HorizontalBox'
import '../styles/Projects.css'

import Makro1 from '../assets/projectgallery/makro1.JPG';
import Makro2 from '../assets/projectgallery/makro2.JPG';

const galleryImages = [
  { src: Makro, alt: 'Image 1' },
  { src: Makro1, alt: 'Image 2' },
  { src: Makro2, alt: 'Image 3' },
  { src: Makro, alt: 'Image 1' },
  { src: Makro1, alt: 'Image 2' },
  { src: Makro2, alt: 'Image 3' },
];

function Projects() {
  return (
    <div className='projectspage'>
      
        <div className='overview' style={{ backgroundImage: `url(${Makro})`}}>
            <h1> Provide a brief introduction about the types of projects completed 
                (e.g., commercial buildings, warehouses, industrial plants).</h1>
        </div>

        <div className='casestudies'>
          <h1> Case Studies </h1>
          <div className="casestudies-content">
            <Hori header="Mercedez-Benz" 
                  content="we had to do a lot of work at the mercedez benz plant in East London"/>
            <Hori header="PG Bison" 
                  content="we had to do a lot of work at the mercedez benz plant in East London"/>
            <Hori header="Makro" 
                  content="we had to do a lot of work at the mercedez benz plant in East London"/>  
            </div>  
        </div>

        <div className='prjectsgallery'>
          <h1> Gallery </h1>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} className="gallery-image" />
            ))}
        </div>
        </div>

        

    </div>
  )
}

export default Projects
