import React from 'react'
import { useParams } from "react-router";

const Hello = () => {
    const { wordle } = useParams();
    
    return(
    <>
        {
            typeof (wordle)!==('')?
        <h1>The Word is: { wordle } </h1> : null
        }
    </>
    )
}


export default Hello;