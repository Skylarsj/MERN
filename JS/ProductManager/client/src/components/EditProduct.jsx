import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const EditProductForm = (props) => {

    const [product, setProduct] = useState({})
    const {id} = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then( res => {
                setProduct(res.data);
            })
            .catch( err => console.log(err) );
    }, [id]);

    const onSubmitHandler = (e) => {

        e.preventDefault();

        axios.patch('http://localhost:8000/api/product/edit' + id, { product})
        .then(res=>{
            console.log(res);
            setProduct([...product, res.data])
            navigate('/product')
            console.log(res.data);
        })
        .catch(err=>console.log(err));
    }
    const onChangeHandler = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
            });
    }
    return (
        <div className="flex justify-center flex-col border-2 h-[250px] w-[250px] m-auto">
            <div className="flex justify-center">
                <form onSubmit={onSubmitHandler} className="flex flex-col justify-center">
                    <p className="mb-5">Edit Product</p>

                    <input placeholder="Title" className="border mb-5" type="text" name="Title" value={product.Title || ""} onChange={onChangeHandler} required/>

                    <input placeholder="$00.0" className="border mb-5"type="number" min="0.00" step="0.01" name="Price" value={product.Price || ""} onChange={onChangeHandler} required/>

                    <input placeholder="Description" className="border mb-5" type="text" name="Description" value={product.Description || ""} onChange={onChangeHandler} required/>

                    <button className="border rounded-full w-[225px] hover:bg-slate-400 active:bg-slate-700" type="submit">Save Changes</button>
                </form>
            </div>
        </div>
    )
}

export default EditProductForm;