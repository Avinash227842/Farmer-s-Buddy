import React from 'react'
import { Title } from '../../common/title/Title'
import "./hero.css"

export const Hero = () => {
  return (
    <>
       <section className='hero'>
        <div className="container">
            <div className="row">
                <Title title="Together We Grow" />
                <p>Here we provide you the fortune to know everythng about what you grow and what your land needs and yeilds.We here provide you the happiness to know the sunlight for your crops and heaven of rain and the warning of a bad day.our information about your crops and fertilizers and the Weather of the day is just a click away</p>
            </div>
        </div>
       </section>
       <div className="margin"></div>
    </>
  )
}
