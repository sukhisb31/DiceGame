import React from 'react';
import Styled from "styled-components";
import {Button} from "../button-styled/Button";

const Home = ({toggle}) => {
    return (
        <Container>

            <div className="img">
                <img src="./images/dices.png" alt="img" />
            </div>
            <div className="text">
                <h1>DICE GAME</h1>
                <Button onClick={toggle} >PLAY GAME</Button>
            </div>
           
        </Container>
    )
}

export default Home

const Container = Styled.div`
    max-width:1180px;
    margin:0 auto;
    display:flex;
    align-items:center;
    height:100vh;

    .text{
    h1{
        font-size:95px;
        white-space:nowrap;
    }}
`;