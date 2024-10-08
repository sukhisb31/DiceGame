import React from 'react';
import Styled from "styled-components";
import "./SelectedNumber.css";

const SelectNumbers = ({error, setError , selectNumber, setSelectNumber}) => {
   const arrNumber =[1,2,3,4,5,6];

   const handleNumber = (value) =>{
    setSelectNumber(value);

    setError("")
   }
   
    return (

        <Numbers>
            <div className="error">
            <p >{error}</p>
            </div>
              
            <div className="section-center">
          
            {
                arrNumber.map((value, i) => <Box 
                isSelected = {value === selectNumber}
                onClick={() => handleNumber(value)}
                key={i} >{value}</Box>)
            }
            </div>
            <p>SELECT NUMBER</p>
        </Numbers>
    )
}

export default SelectNumbers

const Numbers = Styled.div`
    display:flex;
    flex-direction:column;
    align-items:end;

    .section-center{
        display:flex;
        gap:24px;
    }
    p{
        font-size:24px;
        font-weight:700;
       
    }
    
`;
const Box = Styled.div`
    height:72px;
    width:72px;
    border: 1px solid black;
    font-size:24px;
    font-weight:700;
    display:grid;
    place-items:center;
    background-color:${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
    `;