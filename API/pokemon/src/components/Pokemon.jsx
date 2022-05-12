import React, { useState } from "react";

const Pokemon = () => {
    let [allPokemon, setAllPokemon] = useState([]);
    // state varible to store all our pokemon in 
    const getPokemon = () => {
        // console.log("Go Pokemon Go!")
        fetch("https://pokeapi.co/api/v2/pokemon")
            // fetch gives back a promise. A promise is a set of code that does not read line to line so it can run other code while its waiting to get back a response(its like a multi tasker)
            .then(response => {
                // .then means whenever the api is done getting back data
                return response.json()
            })
            .then(response => {
                console.log(response)
                setAllPokemon(response.results)
                // console.log(setAllPokemon)
            })
            .catch(error=> {
                // catch is for if there is any issue getting the data..so it doesnt always run?
                console.log(error)
            })
    }
    return (
        <div>
            <button className="mt-3" onClick={getPokemon} >Fetch Pokémon</button>
            {
                allPokemon.map((pokemon, idx)=>{
                    return(
                    <ul key={idx}>
                        <li>{pokemon.name}</li>
                    </ul>
                    )
                })
            }
        </div>
    )
}




export default Pokemon;