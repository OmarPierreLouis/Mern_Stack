import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


const AllAuthors = () => {
    const [allAuthors, setAllAuthors] = useState([]);
    const [deleteToggle, setDeleteToggle] = useState(false);

    const deleteAuthor = (id) => {
        console.log("I'm Deleting", id)
        axios.delete(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                console.log(res)
                setDeleteToggle(!deleteToggle)
            })
            .catch(err => console.log(err, "I'm not going anywhere"))

    }
    useEffect(() => {
        axios.get("http://localhost:8000/api/author/get")
            .then(res => {
                console.log(res)
                setAllAuthors(res.data.results)
            })
            .catch(err => {
                console.log("error", err)
            })
    }, [deleteToggle])

    return (
        <div>
            <>
                <p> <Link className="btn btn-primary" to="/author/new">Add New Author</Link></p>
                <h2>We have quotes by: </h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Authors</th>
                            <th scope="col">Actions Avalible</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allAuthors.map((author, index) => {
                                return (
                                    <tr key={author._id}>
                                        <td>
                                            <p>{author.author}</p>
                                        </td>
                                        <td>
                                            <p><Link className="btn btn-success" to={`/${author._id}/edit`}> Edit</Link></p>
                                            <button onClick={() => { deleteAuthor(author._id) }} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </>
        </div>
    );
};


export default AllAuthors;