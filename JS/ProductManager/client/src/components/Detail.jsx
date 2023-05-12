import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useNavigate, useParams} from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams(); 
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then( res => {
                console.log(res)
                setProduct(res.data);
            })
            .catch( err => console.log(err) );
    }, [id]);


    const deleteProduct = (id)  => {
        axios.delete('http://localhost:8000/api/product/' + id)
        .then(res => {
            navigate('/product/');
        })
        .catch(err => console.log(err))
        
        
    }
    return (
        <div className="w-[300px] m-auto border">
            <p className="flex justify-center py-5">Title: {product.Title}</p>
            <p className="flex justify-center pb-5">Price: ${product.Price}</p>
            <p className="flex justify-center pb-5">Description: {product.Description}</p>
            <Link className=" border-t flex justify-center h-10 hover:bg-green-500 pt-2"to={`/product/edit/${product._id}`}>Edit</Link>
            <button className="w-full p-2 hover:bg-rose-600" onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
        </div>
    );
}
export default Detail;