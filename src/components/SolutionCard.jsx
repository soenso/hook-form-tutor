import React from "react";

const SolutionCard = ({solution}) => {
  return(
    <div>
      <div>solution ref</div>
      <div>{JSON.stringify(solution)}</div>
    </div>
  )
}

export default SolutionCard;
