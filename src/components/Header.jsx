import React, {useState, useEffect} from 'react'
import DatePicker from 'react-datepicker';
import styled from 'styled-components'


const StyledHeader = styled.div`
font-family: 'DM Mono', monospace;
box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
width: 50%;
display: flex;
flex-direction: column;
background-color: rgb(240, 240, 240);
border-radius: 5px;
padding: 2%;


@media(max-width: 500px) {
        width: 80%;
        margin: 5% 0;
    };
`
const StyledHeaderContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`

export default function Header({date, selectDate, dateSetter, setSelectDate, formattedDate, title}){
    // const {date} = props
    return (
        <StyledHeaderContainer >
        <StyledHeader className = 'headerContainer'>
            <h2>Date of Image: </h2>
            <DatePicker onChange={dateSetter} placeholderText="Select a date"  selected = {selectDate} inputStyle={{textAlign: 'center'}}/>
        </StyledHeader>
        </StyledHeaderContainer>
    )
}

