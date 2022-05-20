import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const EditAuthor = () => {
    const [editAuthorInfo, setEditAuthorInfo] = useState({});
    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/${id}/edit`)
            .then(res => {
                console.log("Boom Boom Clap", res);
                setEditAuthorInfo(res.data.results)
            })
            .catch(err => console.log(err, "error"))
    }, [])

    const changeHandler = (e) => {
        setEditAuthorInfo({
            ...editAuthorInfo,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/${id}`, editAuthorInfo)
            .then(res => {
                console.log(res)
                if (res.data.error) {
                    //Validation errors need to be saved when an Error occurs
                    setEditAuthorInfo(res.data.error.errors);
                }
                else {
                    history.push("/")
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={submitHandler} >
                <div className="mb-3">
                    <label className="form-label">Name: </label>
                    <input onChange={changeHandler} value={editAuthorInfo.author} name="author"  type="text" className="form-control" />
                    <p className="text-danger">{editAuthorInfo.author?.message}</p>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="submit" className="btn btn-primary">Cancel</button>
            </form>
        </div>
    );
};



export default EditAuthor;