import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams(); 
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then( res => {
                setProduct(res.data);
            })
            .catch( err => console.log(err) );
    });
    return (
        <div>
            <p>First Name: {product.Title}</p>
            <p>Last Name: {product.Description}</p>
        </div>
    );
}
export default Detail;