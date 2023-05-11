import React, { useState } from "react";
import axios from "axios";

const ProductForm = (props) => {

    const {product, setProduct} = props;

    const [formInput, setFormInput] = useState
    ({
        Title: "",
        Price: "",
        Description: ""
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/product', formInput )
        .then(res=>{
            console.log(res);
            setProduct([...product, res.data])
            console.log(res.data);
        })
        .catch(err=>console.log(err));

        setFormInput({
            Title: "",
            Price: "",
            Description: ""
        })
    }

    const onChangeHandler = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
            });
    }
    return (
        <div className="flex justify-center flex-col border-2 h-[250px] w-[250px] m-auto">
            <div className="flex justify-center">
                <form onSubmit={onSubmitHandler} className="flex flex-col justify-center">
                    <p className="mb-5">Add Product</p>

                    <input placeholder="Title" className="border mb-5" type="text" name="Title" value={formInput.Title} onChange={onChangeHandler} required/>

                    <input placeholder="$00.0" className="border mb-5"type="number" min="0.00" step="0.01" name="Price" value={formInput.Price} onChange={onChangeHandler} required/>

                    <input placeholder="Description" className="border mb-5" type="text" name="Description" value={formInput.Description} onChange={onChangeHandler} required/>

                    <button className="border rounded-full w-[225px] hover:bg-slate-400 active:bg-slate-700" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ProductForm;