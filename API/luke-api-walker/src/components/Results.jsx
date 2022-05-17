import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Results = () => {
    let { categ, id } = useParams();
    // create a state variable to store our api information into
    let [info, setInfo] = useState({})
    // use useEffect to keep your axios call from being an infinite loop 
    useEffect(() => {

        // Make an api call using axios
        axios(`https://swapi.dev/api/${categ}/${id}/`).then(response => {
            console.log("This is our response ->", response)
            setInfo(response.data)
        })
            .catch(error => { console.log(error) })

    }, [id, categ])

    return (
        <div>
            {
                categ == "people" ?
                    <div className="mt-10 d-flex justify-content-around align-items-center" >
                        <h2>{info.name}</h2>
                        <p>Height: {info.height}</p>
                        <p>Mass: {info.mass}</p>
                        <p>Hair Color: {info.hair_color}</p>
                        <p>Skin Color {info.skin_color}</p>
                    </div> : categ == "films" ?
                        <div>
                            <h2>{info.title}</h2>
                            <p>Episode: {info.episode_id}</p>
                            <p>Opening: {info.opening_crawl}</p>
                            <p>Director: {info.director}</p>
                            <p>Producer {info.producer}</p>
                        </div> : categ == "starships"?
                            <div>
                                <h2>{info.name}</h2>
                                <p>Model: {info.model}</p>
                                <p>StarShip: {info.starship_class}</p>
                                <p>Manufacturer: {info.manufacturer}</p>
                                <p>Passengers {info.passengers}</p>
                            </div> : categ == "species" ?
                                <div>
                                    <h2>{info.name}</h2>
                                    <p>Classification: {info.classification}</p>
                                    <p>Average Height: {info.average_height}</p>
                                    <p>Average Lifespan: {info.average_lifespan}</p>
                                    <p>Skin Colors {info.skin_colors}</p>
                                </div>:
                                <h1>These are not the droids you are looking for</h1>
            }
        </div>
    );
};


export default Results;