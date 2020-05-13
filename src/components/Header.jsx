import React, {useState, useEffect} from 'react'

export default function Header({date}){
    // const {date} = props
    return (
        <div className = 'headerContainer'>
            <h1>Date of Image: </h1>
            <h2>{date}</h2>
        </div>
    )
}