import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    let [Title, setTitle] = useState("");
    let [Price, setPrice] = useState("");
    let [Description, setDescription] = useState("");

    // Submit handler
    const addProduct = (e)=>{
        e.preventDefault();
        // Package up form infomation
        let productInfo = { Title, Price,Description}
        
        axios.post("http://localhost:8000/api/product/new",productInfo)
        .then(res=>{
            console.log("this means I'm working",res)
        })
        .catch(err=>console.log("error",err))
        // Clear out form information after we submit the form 
        setTitle("");
        setDescription("");
        setPrice("");
    }

    return (
        <div>
            <form onSubmit={addProduct}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input className="form-control" onChange={(e) => setTitle(e.target.value)} value={Title}/>
                </div>
                <div className="mb-3">
                    <label htmlFor='' className="form-label">Price</label>
                    <input className="form-control" onChange={(e) => setPrice(e.target.value)} value={Price} />
                </div>
                <div className="mb-3">
                    <label htmlFor='' className="form-label">Description</label>
                    <input className="form-control" onChange={(e) => setDescription(e.target.value)} value={Description} />
                </div>
                <button type="submit" className="btn btn-primary mb-5">Create</button>
            </form>
        </div>
    )
}
export default Form;