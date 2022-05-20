import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const NewAuthor = () => {
    let [author, setAuthor] = useState();
    const history = useHistory();
    let [errors,setErrors] = useState({});

    const addAuthor = (e) => {
        e.preventDefault();
        // Package up form infomation
        let authorName = { author }
        //Create a State variable to store Validations errors in a empty object 
        axios.post("http://localhost:8000/api/author/new", authorName)
            .then(res => {
                console.log("this means I'm working", res)
                if(res.data.error){
                    //Validation errors need to be saved when an Error occurs
                    setErrors(res.data.error.errors);
                }
                else{
                    history.push("/")
                }
            })
            .catch(err => console.log("error", err))
        // Clear out form information after we submit the form 
        setAuthor("");
    }
    return (
        <div>
            <p><Link to="/"> Home </Link> </p>

            <form onSubmit={addAuthor}>
                <div className="mb-3">
                    <label className="form-label">Name: </label>
                    <input type="text" className="form-control" onChange={(e) => setAuthor(e.target.value)} value={author} />
                    <p className="text-danger">{errors.author?.message}</p>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <p><Link className="btn btn-success" to="/"> Cancel </Link> </p>
                {/* <button type="submit" className="btn btn-primary">Cancel</button> */}
            </form>
        </div>
    );
};


export default NewAuthor;