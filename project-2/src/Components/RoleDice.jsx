// import { useState } from "react";
import styled from "styled-components";

const RoleDice = (
  { rolldice, currentDice }
) => {
  return <RDC>
    <div className="RDC_1" onClick={rolldice}>
      <img src={`/images/dices/dice_${currentDice}.png`} alt="Dice" />

    </div>
    <p>Click on dice to roll</p>
  </RDC>
};
export default RoleDice;

const RDC = styled.div`
.RDC_1{
text-align: center;
cursor: pointer;
}
p{
    text-align: center;
    font-size: 30px;
}
`;