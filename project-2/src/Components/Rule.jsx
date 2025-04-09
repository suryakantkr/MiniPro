import styled from "styled-components";
const Rule = () => {
   return <RuleContainer>
      <div className="rule">
         <h1>How to play dice game</h1>
         <p>Select any number</p>
         <p>Click on dice image</p>
         <p>After click on dice if selected number is equal to dice you will get same points as dice</p>
         <p>If you get wrong guess then 2 point will be deducted </p>
      </div>
   </RuleContainer>
};
export default Rule;

const RuleContainer = styled.div`
    background-color: rgb(217, 173, 173);
    border:1px solid black ;
    max-width: 35rem;
    margin:0 auto;    
 `;