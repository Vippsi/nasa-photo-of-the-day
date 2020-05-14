import React, {useState, useEffect} from 'react'
import DatePicker from 'react-datepicker';



export default function Header({date, selectDate, dateSetter, setSelectDate, formattedDate, title}){
    // const {date} = props
     
    

  

    return (
        <div className = 'headerContainer'>
            <h2>Date of Image: </h2>
            <DatePicker onChange={dateSetter} placeholderText="Select a date" selected = {selectDate}/>
            {console.log(formattedDate)}
            <h1>{title}</h1>
            {console.log(title)}
        </div>
    )
}

