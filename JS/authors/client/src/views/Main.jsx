import React, { useState } from 'react'
import AuthorList from '../components/AuthorList';
import { Link } from 'react-router-dom';

const Main = () => { 
    const [author, setAuthor] = useState([]);

    const removeFromDom = (id) => {
        setAuthor(author.filter(author => author._id !== id ))
    }

    return (
        <div className='pt-5'>
            <Link to="/AuthorCreate" author={author} setAuthor={setAuthor}>Add Author</Link>
                <hr className='mt-5'/>
            <div className="flex">
                <AuthorList author={author} setAuthor={setAuthor} removeFromDom={removeFromDom}/>
            </div>

        </div>
    )
}

export default Main;