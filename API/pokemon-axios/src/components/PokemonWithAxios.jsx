import React, { useState } from "react";
import axios from 'axios';

const PokemonWithAxios = () => {
    let [allPokemon, setAllPokemon] = useState([]);
    const getPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                console.log(response)
                setAllPokemon(response.data.results)
                // console.log(setAllPokemon)
            })
            .catch(error => {
                // catch is for if there is any issue getting the data..so it doesnt always run?
                console.log(error)
            })
    }
    return (
        <div>
            <button className="mt-3" onClick={getPokemon} >Fetch Pokémon</button>
            {
                allPokemon.map((pokemon, idx) => {
                    return (
                        <ul key={idx}>
                            <li>{pokemon.name}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}




export default PokemonWithAxios;