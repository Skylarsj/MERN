import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

const AuthorList = (props) => {

    const {removeFromDom, author, setAuthor} = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/author")
        .then((res)=>{
            setAuthor(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    }, [setAuthor]);

    const deleteAuthor = (id)  => {
        axios.delete('http://localhost:8000/api/author/' + id)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {
                author.slice(0).reverse().map((author, index)=>{
                    return (
                        <div key={index} className="border hover:bg-slate-500 justify-between mb-5">
                            <Link className="flex justify-center h-10 w-full p-2"to={`/author/${author._id}`}>See more: {author.Author}</Link>
                            <div>
                                <button className="w-full p-2 hover:bg-rose-600 border-t" onClick={(e)=>{deleteAuthor(author._id)}}>Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default AuthorList