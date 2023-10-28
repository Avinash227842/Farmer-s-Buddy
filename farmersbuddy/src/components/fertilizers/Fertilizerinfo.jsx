import React from 'react'
import { fertilizerinfo } from '../../dummydata'
import { Title } from '../common/title/Title'

export const Fertilizerinfo = () => {
  return (
    <>
       <section className="fertilizerinfo">
        <div className="container flexSB">
            <div className="left row">
                <Title subtitle="Organic Fertilizers"/>
                <img src="https://cdn.shopify.com/s/files/1/0579/7924/0580/t/18/assets/shutterstock_601454150-1.jpg?v=1661870779" alt="" />
                <Title subtitle="Inorganic Fertilizers"/>
                <img src="https://cdn.shopify.com/s/files/1/0579/7924/0580/t/18/assets/Fertilizers-both-organic-and-chemical-based-are-rated-by-their-content-of-the-Macro-Nutrients-NPK-N-Nitrogen-P-Phosphorus-K-Potassium.png?v=1661870809" alt="" />
            </div>
            <div className="right row">
                <Title title="TYPES OF FERTILIZERS"/>
                <div className="items">{fertilizerinfo.map((val) => (
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
