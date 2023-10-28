import React from "react";
import { cropsCard } from "../../dummydata";
import "./crop.css"

export const CropCard = () => {
  return (
    <>
      <section className="cropsCard">
        <div className="container grid2">
          {cropsCard.map((val) => (
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
                      <p>Sowing Time: <span>{details.sowingtime}</span></p>
                      <p>Harvest Time: <span>{details.harvesttime}</span></p>
                      <p>Soil Preffered: <span>{details.soil}</span></p>
                      <p>Nutrients Needed: <span>{details.nutrientsneeded}</span></p>
                      <p>Places grown at: <span>{details.states}</span></p>
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
  );
};
