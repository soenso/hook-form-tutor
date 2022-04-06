import React, { useState } from 'react'

const FertCard = ({ fert }) => {
  const calculateFert = () => {
    if (fert.proportion === '%') {
      fert.N = (1000 * fert.N) / 100
    }
  }
  return (
    <div>
      <div>solution ref</div>
      <div>{fert ? fert.proportion : ''}</div>
      <div>{JSON.stringify(fert)}</div>
    </div>
  )
}

export default FertCard
