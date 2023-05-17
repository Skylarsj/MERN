import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const EditAuthorForm = (props) => {

    const [author, setAuthor] = useState({})
    const {id} = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + id)
            .then( res => {
                setAuthor(res.data);
            })
            .catch( err => console.log(err) );
    }, [id]);

    const onSubmitHandler = (e) => {

        e.preventDefault();

        axios.patch('http://localhost:8000/api/author/' + id, author)
        .then(res=>{
            console.log("Here it is!", res);
            navigate('/author');
        })
        .catch(err=>console.log(err));
        
    }
    const onChangeHandler = (e) => {
        setAuthor({
            ...author,
            [e.target.name]: e.target.value
            });
    }
    return (
        <div className="flex justify-center flex-col border-2 h-[250px] w-[250px] m-auto">
            <div className="flex justify-center">
                <form onSubmit={onSubmitHandler} className="flex flex-col justify-center">
                    <p className="mb-5">Edit Author</p>

                    <input placeholder="Author" className="border mb-5" type="text" name="Author" value={author.Author || ""} onChange={onChangeHandler} required/>

                    <button className="border rounded-full w-[225px] hover:bg-slate-400 active:bg-slate-700" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default EditAuthorForm;