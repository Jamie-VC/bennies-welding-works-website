import React from 'react'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='left'>
        <h1> Contact </h1>
        <h2> Address </h2>
        <p> 1 Wells Rd, Gately, East London, 5201 </p>
        <h2> Phone </h2>
        <p> 043 731 1355 </p>
        <h2> E-mail </h2>
        <p> shanna@bennieweld.co.za </p>
      </div>
      <div className='right'>
        <h1> Contact Form</h1>
        <form>
        <label>Enter your name:
          <input type="text" />
        </label>
        <label>Enter your number:
          <input type="text" />
        </label>
        <label>Enter your e-mail:
          <input type="text" />
        </label>
        <label>Enter your message:
          <input type="text" />
        </label>
        <button> Submit </button>
      </form>
      </div>
    </div>
  )
}

export default Contact
