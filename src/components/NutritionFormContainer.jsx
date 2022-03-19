import React, { useState } from 'react'
import Form from './Form'
import SolutionCard from './SolutionCard'

const NutritionFormContainer = () => {
  const [solutionCard, setSolutionCard] = useState()
  const handleFormSubmit = (data) => {
    setSolutionCard(data)
  }
  return (
    <div>
      <Form onSubmit={handleFormSubmit} />
      <SolutionCard solution={solutionCard} />
    </div>
  )
}
export default NutritionFormContainer
