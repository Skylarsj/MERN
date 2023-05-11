import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
const PersonList = (props) => {

    const {removeFromDom, people, setPeople} = props;
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/people")
        .then((res)=>{
            setPeople(res.data);
    })
        .catch((err)=>{
            console.log(err);
        });
    }, []);
    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res => {
                removeFromDom(personId)
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div>
            {
                people.map((person, index)=>{
                return (
                    <div key={index}>
                        <p>{person.lastName}</p> 
                        <p>{person.firstName}</p>
                        <Link to={`/people/${person._id}`}> {person.firstName}'s Page! </Link>
                        <button onClick={(e)=>{deletePerson(person._id)}}>
                            Delete
                        </button>
                    </div> 
                )})
            }
        </div>
    );
}
export default PersonList;