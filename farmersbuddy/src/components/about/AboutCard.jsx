import React from 'react'
import { homeAbout } from '../../dummydata'
import { Title } from '../common/title/Title'
import "./about.css";

export const AboutCard = () => {
  return (
    <>
        <section className="aboutHome">
          <div className="container flexSB">
            <div className="left row">
              <img src="./images/about.jpg" alt="" />
            </div>
            <div className="right row">
              <Title subtitle="hello" title="welcome"/>
              <div className="items">{homeAbout.map((val) => (
                <div className="item flexSB">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}</div>
            </div>
          </div>
        </section>
    </>
  )
}
