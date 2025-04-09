import styled from "styled-components";

const NumSe = (
    {setError, error, SetSeletedNumber, seletedNumber }
) => {
    const ArrNu = [1, 2, 3, 4, 5, 6];

    const NuSeHandler=(Value)=>{
        SetSeletedNumber(Value);
        setError(" ");
        
    }

    return (
        <NoSe>
            <p  className="error">{error}</p>
            <div className="flex">
                {ArrNu.map((Value, i) => (
                    <Box
                        isSelected={Value === seletedNumber}
                        key={i}
                        onClick={() => NuSeHandler(Value)}
                    >
                        {Value}
                    </Box>
                ))}
            </div>
            <p> Select Number </p>
        </NoSe>
    );
};

export default NumSe;

const NoSe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap: 20px;
    }
    p{
        font-size: 24px;
        font-weight: 700px;
    }
    .error{
        color: red;
    }
`;

const Box = styled.div`
    border: 1px solid black;
    height: 72px;
    width: 72px;
    display: grid;
    font-size: 24px;
    font-weight: 700;
    place-items: center;
    cursor: pointer;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
