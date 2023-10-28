import React from 'react'
import { fertilizersCard } from "../../dummydata"
import "./fertilizer.css"

export const FertilizerCard = () => {
  return (
    <>
        <section className="fertilizersCard">
            <div className="container grid2">
                {fertilizersCard.map((val) => (
                    <div className="items">
                        <div className="content flex">
                           <div className="left">
                            <div className="img">
                              <img src={val.cover} alt="" />
                            </div>
                           </div>
                           <div className="text">
                            <h1>{val.name}</h1>
                            <div className="details">
                              {val.desc.map((details) => (
                                <>
                                <p>Organic Fertilizer: <span>{details.organic}</span></p>
                                <p>Inorganic Fertilizer: <span>{details.inorganic}</span></p>
                                </>
                              ))}
                            </div>
                           </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}
