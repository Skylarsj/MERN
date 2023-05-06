import React, { useState } from "react";
import axios from "axios";

const productForm = () => {
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
        <form onSubmit={onSubmitHandler}>
            <input type="text" name="Title" value={formInput.Title} onChange={onChangeHandler}/>

            <input type="number" name="Price" value={formInput.Price} onChange={onChangeHandler}/>

            <input type="text" name="Description" value={formInput.Description} onChange={onChangeHandler}/>

            <input type="submit"/>
        </form>
    )
}

export default productForm;