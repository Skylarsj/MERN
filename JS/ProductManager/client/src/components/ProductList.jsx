import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {

    const {removeFromDom, product, setProduct} = props;



    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
        .then((res)=>{
            setProduct(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    }, [setProduct]);

    const deleteProduct = (id)  => {
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {
                product.slice(0).reverse().map((product, index)=>{
                    return (
                        <div key={index} className="border hover:bg-slate-500 justify-between mb-5">
                            <Link className="flex justify-center h-10 w-full p-2"to={`/product/${product._id}`}>See more: {product.Title}</Link>
                            <div>
                                <button className="w-full p-2 hover:bg-rose-600 border-t" onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ProductList