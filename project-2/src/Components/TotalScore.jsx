
import styled from "styled-components";
const TotalScore=({Score})=>{
    return(
        <ScoreContainer>
            <div>
                <h1>{Score}</h1>
                <p>Total Score</p>
            </div>
        </ScoreContainer>
    )
};
export default TotalScore;

const ScoreContainer = styled.div`
max-width: 200px;
text-align: center;

  h1{
    font-size: 80px;
    line-height: 4px;
  }
  p{
    font-size: 24px;
    font-weight: 500px;
  }
`;


