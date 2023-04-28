import React from 'react';
import {useParams} from 'react-router-dom';

const Home = () => { 
    const { arg, argcolor, argbg} = useParams();
    if (isNaN(arg) === true){
        return (
        <div className='m-auto' style={{background: argbg}}>

            <p style={{color: argcolor}}>The word is: {arg}</p>

        </div>
    );
    }
    else {
    return (
        <div className='m-auto' style={{background: argbg}}>

            <p style={{color: argcolor}}>The number is: {arg}</p>

        </div>
    );
}
}

export default Home;