import React from 'react'
import "./contact.css"
import { Back } from '../common/back/Back'

export const Contact = () => {

    const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d335997.9524524843!2d2.06685442434747!3d48.85851542515881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sin!4v1666770895226!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  return (
    <>
     <Back title="Contact Us"/>
     <section className='contacts padding'>
      <div className='container shadow flexSB'>
        <div className='left row'>
          <iframe title='LOCATION' src={map}></iframe>
        </div>
        <div className='right row'>
          <h1>Contact us</h1>
          <p>We're open for any suggestion or just to have a chat</p>

          <div className='items grid2'>
            <div className='box'>
              <h4>ADDRESS:</h4>
              <p>9th Arrondissement of Paris</p>
            </div>
            <div className='box'>
              <h4>EMAIL:</h4>
              <p>www.farmersbuddy.com</p>
            </div>
            <div className='box'>
              <h4>PHONE:</h4>
              <p>+91 8492096520</p>
            </div>
          </div>

          <form action=''>
            <div className='flexSB'>
              <input type='text' placeholder='Name' />
              <input type='email' placeholder='Email' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea cols='30' rows='10'>
              Write a message here...
            </textarea>
            <button className='primary-btn'>SEND MESSAGE</button>
          </form>

          <h3>Follow us here</h3>
          <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
        </div>
      </div>
    </section>
    </>
  )
}
