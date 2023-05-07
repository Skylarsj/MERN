import React, { useState } from "react";
import axios from "axios";

const ProductForm = () => {
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
                console.log(res.data);
            })
            .catch(err=>console.log(err));
    }

    const onChangeHandler = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
            });
    }
    return (
        <div className="flex justify-center flex-col border-2 h-[250px]">
            <form onSubmit={onSubmitHandler}>
                <input placeholder="Title" className="border mb-5" type="text" name="Title" value={formInput.Title} onChange={onChangeHandler}/>

                <input placeholder="$00.0" className="border mb-5"type="number" min="0.00" step="0.01" name="Price" value={formInput.Price} onChange={onChangeHandler}/>

                <input placeholder="Description" className="border mb-5" type="text" name="Description" value={formInput.Description} onChange={onChangeHandler}/>

                <button className="border w-[225px] hover:bg-slate-400 active:bg-slate-700" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ProductForm;