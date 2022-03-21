import React, { useState } from 'react'
import Form from './Form'
import FertCard from './FertCard'

const NutritionFormContainer = () => {
  const [fertCard, setFertCard] = useState()
  const handleFormSubmit = (data) => {
    setFertCard(data)
  }
  return (
    <div>
      <Form onSubmit={handleFormSubmit} />
      <FertCard fert={fertCard} />
    </div>
  )
}
export default NutritionFormContainer
