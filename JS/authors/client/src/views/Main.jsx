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
                <hr/>
            <div className="flex">
                <AuthorList author={author} setAuthor={setAuthor}/>
            </div>


        </div>
    )
}

export default Main;