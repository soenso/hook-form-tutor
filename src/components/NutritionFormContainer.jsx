import React, { useState } from "react";
import Form from "./Form";
// import SolutionCard from "./SolutionCard";

const NutritionFormContainer = () => {
  
  const[solutionCard, setSolutionCard] = useState({})
  const addSolution =(props) =>{
        setSolutionCard(props.formData)
  }
  return (<>
  <Form updateData={addSolution}/>
  {/* <SolutionCard /> */}
  {console.log(solutionCard)}
  </>
  )
};
export default NutritionFormContainer