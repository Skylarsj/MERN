import React, { useState } from 'react'
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';

const Main = () => { 
    const [author, setAuthor] = useState([]);

    const removeFromDom = (id) => {
        setAuthor(author.filter(author => author._id !== id ))
    }

    return (
        <div className='pt-5'>
            <AuthorForm author={author} setAuthor={setAuthor} />
                <hr className='mt-5'/>
            <div className="flex">
                <AuthorList author={author} setAuthor={setAuthor} removeFromDom={removeFromDom}/>
            </div>

        </div>
    )
}

export default Main;