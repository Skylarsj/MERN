import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useNavigate, useParams} from "react-router-dom";

const Detail = (props) => {
    const [author, setAuthor] = useState({})
    const {id} = useParams(); 
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + id)
            .then( res => {
                console.log(res)
                setAuthor(res.data);
            })
            .catch( err => console.log(err) );
    }, [id]);


    const deleteAuthor = (id)  => {
        axios.delete('http://localhost:8000/api/author/' + id)
        .then(res => {
            navigate('/author/');
        })
        .catch(err => console.log(err))
        
        
    }
    return (
        <div className="w-[300px] m-auto border">
            <p className="flex justify-center py-5">Author: {author.Author}</p>
            <Link className=" border-t flex justify-center h-10 hover:bg-green-500 pt-2"to={`/author/edit/${author._id}`}>Edit</Link>
            <button className="w-full p-2 hover:bg-rose-600" onClick={(e)=>{deleteAuthor(author._id)}}>Delete</button>
        </div>
    );
}
export default Detail;