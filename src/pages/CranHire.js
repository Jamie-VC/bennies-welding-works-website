import React from 'react'
import chBackground from '../assets/chbackground.png'
import ServiceBox from '../components/chServices'
import '../styles/CraneHire.css'

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
      </div>
      
    </div>
  )
}

export default CranHire