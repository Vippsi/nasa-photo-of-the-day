import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


const StyledDescription = styled.div`
font-family: 'DM Mono', monospace;
display: flex;
flex-direction: column;
width: 75%;
justify-content: center;
align-self:center;
text-align: justify;
background-color: rgb(240, 240, 240);
border-radius: 5px;
box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
margin: 2%;
padding: 4%;

@media(max-width: 500px) {
    width: 75%;
    font-size: .8rem;
    padding: 8%;
};

h1 {
    text-align: center;
    padding: 0;
    margin: 0;

    @media(max-width: 500px){
        font-size: 1.2rem;
        margin-bottom: 2%;
    }
}

h3 {
    margin-top: 0;
    padding: 0;
    text-align:center;
}

.whom{
    text-align:center;
    padding:0;
    margin-top: 1%;
}

`
const StyledDescriptionContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`
export default function Description({explanation, title, copyright}){
    // const {explanation} = props
    return (
        <StyledDescriptionContainer>
        <StyledDescription className='descriptionContainer'>
            <h1>{title}</h1>
            <p className='whom'>by:</p>
            <h3>{copyright}</h3>
            <p>{explanation}</p>
        </StyledDescription>
        </StyledDescriptionContainer>
    ) 
    
}