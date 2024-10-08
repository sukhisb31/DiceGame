import React, { useState } from 'react';
import "./Dice.css";
import {Button} from "../button-styled/Button";
import Rules from "../rules/rules";


const Dice = ({currentDice, setScore, roleDice}) => {
    const [showRules,setShowRules] = useState(false);

    const handleReset = () =>{
        setScore (0)
    }

    const handleShowRule = () => {
        setShowRules ((prev) => !prev);
    }


    return (
        
        <div className='container'>
            <div className="photo">
                <img 
                onClick={roleDice}
                src={`./images/dice_${currentDice}.png`} alt="dice" />
                <p>Click on Dice to Roll</p>
                <div className="btns">
                <Button onClick={handleReset}>Reset</Button>
                <Button onClick={handleShowRule}>
                    {showRules ? "Hide" : "show"}
                    Rules</Button>
               
            </div>
            
            </div>
           
           {showRules && <Rules/> } 
           
        </div>
            
       
    )
}

export default Dice;

