import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {

    const {product, setProduct} = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
        .then((res)=>{
            setProduct(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    });

    return (
        <div>
            {
                product.map((product, index)=>{
                    return (
                        <div key={index}>
                            <Link className="underline-offset-1" to={`/product/${product._id}`}>See more: {product.Title}</Link>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ProductList