import styled from 'styled-components';
import { Button } from '../Style/Button';
const StartGame = ({toggle}) => {
    return (
        <Container>
            <img src="/images/dices.png" />
            <div className='content'>
                <h1>DICE GAME</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>

    )
}
export default StartGame;

const Container = styled.div`
    max-width: 1080; 
    height: 100vh;
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    .content{
       h1{
        font-size: 96px;
        white-space: nowrap;
       }
    }
`;
// const Button = styled.button`
//     background-color: black;
//     color: white;
//     border-radius: 5px;
//     min-width: 220px;
//     margin-left:21rem ;
//     padding: 10px 18px;
//     border-radius: 5px;
//     border: none;
//     border: 1px solid transparent;
//     transition: 0.4s background ease-in;
//     font-size: 16px;
//     cursor: pointer;
//     &:hover{
//     background-color:white;
//     border: 1px solid black;
//     color: black;
//     transition: 0ms.3s background ease-in;
//    }
// `;