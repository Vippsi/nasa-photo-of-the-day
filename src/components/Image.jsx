import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


const BigContainer = styled.div `
display:flex;
justify-content:center;
`

const StyledImgContainer = styled.div`
width: 83%;
/* height: 60%; */
border-radius: 5px;
display:flex;
justify-content:center;
background-color: rgb(240, 240, 240);
box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
margin-bottom: 2%;
flex-direction: column;

img{
    display: flex;
    width: 90%;
    height: 90%;
    align-self: center;
    padding: 2%;  
}
`

export default function Image(props){
    const {image, title} = props
    return (
        <BigContainer>
        <StyledImgContainer className='descriptionContainer'>
            <img src={image}/>
        </StyledImgContainer>
        </BigContainer>
    ) 
}