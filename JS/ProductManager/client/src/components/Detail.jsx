import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useParams} from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams(); 
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then( res => {
                console.log(res)
                setProduct(res.data);
            })
            .catch( err => console.log(err) );
    }, [id]);
    return (
        <div className="w-[300px] m-auto border">
            <p className="flex justify-center py-5">Title: {product.Title}</p>
            <p className="flex justify-center pb-5">Description: {product.Price}</p>
            <p className="flex justify-center pb-5">Description: {product.Description}</p>
            <Link className="flex justify-center h-10 hover:bg-green-500 pt-2"to={`/product/edit/${product._id}`}>Edit</Link>
        </div>
    );
}
export default Detail;