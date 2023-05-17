import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AuthorForm = (props) => {


    const [formInput, setFormInput] = useState
    ({
        Author: ""
    });
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();
    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/author', formInput )
        .then(res=>{
            console.log(res);
            navigate("/author")
            console.log(res.data);
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors;
            const errorArr =[];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr)
        });

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
                    
                    <p className="mb-5">Add Author</p>

                    <input placeholder="Author" className="border" type="text" name="Author" value={formInput.Author} onChange={onChangeHandler}/>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <button className="border rounded-full mt-5 w-[225px] hover:bg-slate-400 active:bg-slate-700" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AuthorForm;