import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Search = () => {
    let [categ, setCateg] = useState("");
    let [id, setId] = useState("");
    // we use history to redirect our routes 
const history = useHistory(); 

    
    let submitPage = (e)=>{
        e.preventDefault();
        console.log("May the force be with you");
        history.push(`/${categ}/${id}`);
    }
    return (
        <div>
            <form action="" className="mt-6 d-flex justify-content-around align-items-center" onSubmit={submitPage}>
                <div className=" form-group">
                    <label htmlFor="">Search for:</label>
                    <select onChange={(e) => { setCateg(e.target.value) }} name="" id="" className="form-select">
                        <option defaultValue="" >Please Select Here</option>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="films">Films</option>
                        <option value="species">Species</option>
                        <option value="starship">Starship</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">ID</label>
                    <input type="number" className="form-control" onChange={(e)=>{ setId(e.target.value) }} />
                </div>
                <input className="btn btn-info" type="submit" value="Search" />
            </form>
        </div>
    );
};


export default Search;