import React, { useState } from "react";
import axios from "axios";

const AuthorForm = (props) => {

    const {author, setAuthor} = props;

    const [formInput, setFormInput] = useState
    ({
        Author: ""
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/author', formInput )
        .then(res=>{
            console.log(res);
            setProduct([...author, res.data])
            console.log(res.data);
        })
        .catch(err=>console.log(err));

        setFormInput({
            Author: ""
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

                    <input placeholder="Author" className="border mb-5" type="text" name="Author" value={formInput.Author} onChange={onChangeHandler} required/>

                    <button className="border rounded-full w-[225px] hover:bg-slate-400 active:bg-slate-700" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AuthorForm;