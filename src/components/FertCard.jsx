import React from 'react'

const FertCard = ({ fert }) => {
  const calculateFert = () => {
    if (fert.proportion === '%') {
      // solution.nitro = solution.nitro
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
