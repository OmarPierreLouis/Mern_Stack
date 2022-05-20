import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";

const ProductList = (props) => {
    const [allProducts, setAllProducts] = useState([]);

    const [deleteToggle, setDeleteToggle] = useState(false); 
    
    const deleteProduct = (id)=>{
        console.log("I'm Deleting",id)
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then(res=>{
            console.log(res)
            setDeleteToggle(!deleteToggle)
        })
        .catch(err=>console.log(err,"I'm not going anywhere"))

    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/get")
            .then(res => {
                console.log(res)
                setAllProducts(res.data.results)
            })
            .catch(err => {
                console.log("error", err)
            })
    }, [deleteToggle])
    return (
<div>
    <>
        <center>
            <h1>All Products</h1>
            <table className="table">
                {/* <thead>
                    <tr>
                        <th scope="col">All Products</th>
                    </tr>
                </thead> */}
                <tbody>
                    {
                        allProducts.map((product, index) => {
                            return (
                                <tr key = {product._id}>
                                    <td><Link to={`/product/${product._id}`}>{product.Title}</Link> 
                                        <p><Link className="btn btn-success" to={`/${product._id}/edit`}> Edit {product.Title}</Link></p>
                                        <button onClick={()=>{deleteProduct(product._id)}}  className='btn btn-danger'>Delete{product.Title}</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </center>

    </>
</div>
    )
}

export default ProductList; 