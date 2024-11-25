import React from 'react'
import chBackground from '../assets/chbackground.png'
import ServiceBox from '../components/chServices'
import '../styles/CraneHire.css'

import CR1 from '../assets/cranehiregallery/cranehire1.JPG'

const craneGalleryImages = [
  { src: CR1, alt: 'Image 1' },
  { src: CR1, alt: 'Image 1' },
  { src: CR1, alt: 'Image 1' },
  { src: CR1, alt: 'Image 1' },
  { src: CR1, alt: 'Image 1' },
  { src: CR1, alt: 'Image 1' },
];

/* we supply cranes for what services*/
/* Types of cranes e.g. all terrain */
function CranHire() {
  return (
    <div className='chPage'>
      
      <div className='chhome' style={{ backgroundImage: `url(${chBackground})`}}>
        <div className='bcheader'>
          <h1> Bennies Crane Hire </h1>
        </div>
      </div>

      <div className='chServices'>
        <h1> Services we provide for </h1>
        <div className="service-box-container">
          <ServiceBox servicetext="Heavy Lifting" />
          <ServiceBox servicetext="Equipment Transport" />
          <ServiceBox servicetext="Construction Support" />
          <ServiceBox servicetext="Site Relocation" />
          <ServiceBox servicetext="Industrial Projects" />
          <ServiceBox servicetext="Emergency Response" />
        </div>
      </div>

      <div className='chGallery'>
        <h1> Gallery </h1>
        <div className="crane-gallery-grid">
            {craneGalleryImages.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} className="crane-gallery-image" />
            ))}
        </div>
      </div>
      
    </div>
  )
}

export default CranHire