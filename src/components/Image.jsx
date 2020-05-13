import React, {useState, useEffect} from 'react'

export default function Image(props){
    const {image} = props
    return (
        <div className='descriptionContainer'>
            <img src={image}/>
        </div>
    ) 
}