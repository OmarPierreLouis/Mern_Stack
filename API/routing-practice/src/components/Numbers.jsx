import React from 'react'
import { useParams } from "react-router";

const Numbers = () => {
    const { num } = useParams();
    return (
        <>
        {
            isNaN(num)? 
        null : <h1>The Number is: {num} </h1>
        }
        </>
    )

}


export default Numbers;