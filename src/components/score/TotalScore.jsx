import React from 'react';
import Styled from "styled-components";

const PlayGame = ({score}) => {
    return (
        <GameContainer>
            <h1>{score}</h1>
            <p>TOTAL SCORE</p>
        </GameContainer>
    )
}

export default PlayGame

const GameContainer = Styled.div`
    max-width:200px;
    
    text-align:center;

    h1{
        font-size:100px;
        line-height:45px;
    }
    
    p{
        font-size:24px;
        font-weight:500;
    }

`;