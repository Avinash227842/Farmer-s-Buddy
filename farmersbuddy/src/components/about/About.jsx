import React from 'react'
import { Back } from '../common/back/Back'
import { AboutCard } from './AboutCard'
import { TeamCard } from './TeamCard'

export const About = () => {
  return (
    <>
     <Back title="About Us"/>
     <section className="team padding">
            <div className="container flexSB">
                <TeamCard/>
            </div>
      </section>
     <AboutCard/>
    </>
  )
}
