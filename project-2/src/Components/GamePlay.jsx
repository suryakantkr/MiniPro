import styled from "styled-components";
import { useState } from "react";
import NumSe from "./NumSe";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import Rule from "./Rule";
import { Button, OutlineButton } from "../Style/Button";

const GamePlay = () => {
    const [Score, setScore] = useState(0);
    const [currentDice, setcurrentDice] = useState(4);
    const [seletedNumber, SetSeletedNumber] = useState(null);
    const [error, setError] = useState();
    const [showRule,setShowRule]=useState(false);

    const generateRandomNumber = (min, max) => {
        console.log(Math.floor(Math.random() * (max - min) + min))
        return Math.floor(Math.random() * (max - min) + min);
    }
    const rolldice = () => {
        if (!seletedNumber) {
            setError("You have not selected any no.");
            return;
        }
        const randomNum = generateRandomNumber(1, 7);
        setcurrentDice((prve) => randomNum);
        if (seletedNumber == randomNum) {
            setScore((prev) => prev + randomNum);
        } else {
            setScore((prev) => prev - 2);
        }
        SetSeletedNumber(undefined);
    };
    const resetScore=()=>{
        setScore("0");
    }

    return (
        <MainContainer>
            <div className="top-section">
                <TotalScore Score={Score} />
                <NumSe
                    error={error}
                    setError={setError}
                    seletedNumber={seletedNumber}
                    SetSeletedNumber={SetSeletedNumber}
                />
            </div>
            <RoleDice
                currentDice={currentDice}
                rolldice={rolldice}
            />
            <div className="btns">
                <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
                <Button 
                onClick={()=>setShowRule((prev)=>!prev)}>
                    {showRule?"hide":"Show Rules"}</Button>
            </div>
          {showRule &&  <Rule/>}
        </MainContainer>
    );
};
export default GamePlay;

const MainContainer = styled.main`
padding-top: 40px;
    .top-section{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .btns{
     display: flex;
     flex-direction: column;
     gap: 20px;
     align-items: center;
     margin-right: 353px;

    }
`;
