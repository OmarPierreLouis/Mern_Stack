import React,{useState, useEffect} from 'react';
import { useParams,Link, useHistory } from 'react-router-dom';
import axios from 'axios';



const OneProduct = () => {
    const { id } = useParams();
    const [oneProduct, setOneProduct] = useState({});
    const history = useHistory();
    const deleteProduct= ()=>{
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then(res=>{
            console.log(res)
            history.push('/')

        })
        .catch(err=>console.log("error",err))
    }
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/get/${id}`)
        .then(res=>{
            console.log(res);
            setOneProduct(res.data.results)
        })
        .catch(err=>{console.log(err)})
    },[]) //Whis is this an array and not an object since were making an object 

    return (
        <div>
            <h3>Title:</h3> <p>{oneProduct.Title}</p>
            <h3>Description:</h3> <p> {oneProduct.Description}</p>
            <h3>Price:</h3> <p> ${oneProduct.Price}</p>
            <p><Link className="btn btn-dark" to=""> Edit {oneProduct.Title}</Link></p>
            <button onClick={deleteProduct}  className="btn btn-danger">Delete {oneProduct.Title}</button>
        </div>
    );
};

export default OneProduct;