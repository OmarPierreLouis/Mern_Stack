import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; //used for front end redirects 

const EditProduct = () => {
    const history = useHistory();
    const { id } = useParams();
    const [editInfo, setEditInfo] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/get/${id}`)
            .then(res => {
                console.log("Boom Boom Clap", res);
                setEditInfo(res.data.results)
            })
            .catch(err => console.log(err, "error"))
    }, [])

    const changeHandler = (e) => {
        setEditInfo({
            ...editInfo,
            [e.target.name]: e.target.value
        })

    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`, editInfo)
            .then(res => {
                console.log(res)
                history.push("/") //redirects after updating form 

            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h3>Edit Your Product </h3>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label className="form-label">Title </label>
                    <input name="Title" onChange={changeHandler} className="form-control" value={editInfo.Title} />
                </div>
                <div className="mb-3">
                    <label htmlFor='' className="form-label">Price </label>
                    <input onChange={changeHandler} name="Price" className="form-control" value={editInfo.Price} />
                </div>
                <div className="mb-3">
                    <label htmlFor='' className="form-label">Description </label>
                    <input onChange={changeHandler} name="Description" className="form-control" value={editInfo.Description} />
                </div>
                <button type="submit" className="btn btn-dark mb-5">Edit</button>
            </form>
        </div>
    );
};


export default EditProduct;