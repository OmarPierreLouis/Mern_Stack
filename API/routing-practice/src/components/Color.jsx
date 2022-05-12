import React from 'react'
import { useParams } from "react-router";

const Color = ()=>{
    const { color, word, color2 } = useParams();
    return(
        <>
        <h2 style = {{backgroundColor: color, color:color2}}>
            The Word is: {word} 
            </h2>
        </>
    )
}

export default Color;