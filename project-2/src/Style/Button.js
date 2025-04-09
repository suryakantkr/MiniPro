import styled from "styled-components";

export const Button = styled.button`
    background-color: black;
    color: white;
    border-radius: 5px;
    min-width: 220px;
    margin-left:21rem ;
    padding: 10px 18px;
    border-radius: 5px;
    border: none;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    font-size: 16px;
    cursor: pointer;
    &:hover{
    background-color:white;
    border: 1px solid black;
    color: black;
    transition: 0ms.3s background ease-in;
   }
`;
export const OutlineButton = styled(Button)`
background-color: white;
border:1px solid black;
color: black;
&:hover{
    background-color:black;
    border: 1px solid transparent;
    color: white;
   }
`;
