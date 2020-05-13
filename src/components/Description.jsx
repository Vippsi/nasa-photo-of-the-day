import React, {useState, useEffect} from 'react'

export default function Description({explanation}){
    // const {explanation} = props
    return (
        <div className='descriptionContainer'>
            <p>{explanation}</p>
        </div>
    ) 
    
}