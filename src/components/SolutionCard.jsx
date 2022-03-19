import React from 'react'

const SolutionCard = ({ solution }) => {
  const calculateSolution = () => {
    if (solution.proportion === '%') {
      // solution.nitro = solution.nitro
    }
  }
  return (
    <div>
      <div>solution ref</div>
      <div>{solution ? solution.proportion : ''}</div>
      <div>{JSON.stringify(solution)}</div>
    </div>
  )
}

export default SolutionCard
