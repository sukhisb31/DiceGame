import React from 'react';
import TotalScore from "../score/TotalScore";
import SelectNumbers from '../numbers/SelectNumbers';
import Styled from "styled-components";
import Dice from '../dice/Dice';
import { useState } from 'react';

const PlayGame = () => {
    const [ selectNumber , setSelectNumber] = useState();
    const[currentDice, setCurrentDice] = useState(1);
    const [score, setScore] = useState(0);
    const [error, setError] = useState();


    const generateRandomNumber = (min, max) =>{
        return Math.floor(Math.random() * ( max - min) + min);
    }
    
    const roleDice = () =>{
        if(!selectNumber) {
            setError("You Have not Selected any Number")
            return;
        }
        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice ((prev) => randomNumber);

       

        if(selectNumber === randomNumber){
            setScore((prev) => prev + randomNumber);
        }
        else {
            setScore ((prev) => prev - randomNumber);
        }

        setSelectNumber(undefined);
    }

    return (
        <MainContainer>
            <div className="header">
                <TotalScore
                score={score}
                />
                <SelectNumbers 
                setError={setError}
                error = {error}
                selectNumber = {selectNumber}
                setSelectNumber= {setSelectNumber}/>
                

            </div>
            <Dice
            setScore={setScore}
            currentDice={currentDice}
            roleDice={roleDice}
            />
           
        </MainContainer>
    
    )
}

export default PlayGame
 

const MainContainer = Styled.div`

    .header{
        display:flex;
        justify-content:space-around;
        align-items:end;
        
    }

`;