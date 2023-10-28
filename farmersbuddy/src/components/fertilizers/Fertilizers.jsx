import React from 'react'
import { Back } from '../common/back/Back'
import { FertilizerCard } from './FertilizerCard'
import { Fertilizerinfo } from './Fertilizerinfo'

export const Fertilizers = () => {
  return (
    <>
       <Back title="Fertilizers"/>
       <Fertilizerinfo/>
       <FertilizerCard/>
    </>
  )
}
