import React, {useState, useEffect} from 'react';
import logo from './pokeapi.png'
import axios from 'axios';
const Api = () => {

    const [pokemon, setPokemon] = useState([]);


    useEffect(() => {
        axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then((response) => {
            setPokemon(response.data.results)
        console.log(response);
        }).catch(err=>{
            console.log(err);
        });
    }, []);
    
    return (
        <div className="mx-auto w-full">
            <div className="flex bg-[#EF5350] w-full h-15">
                <img className="pl-10"src={logo} alt="logo"/>
            </div>
                <div className=" flex flex-col font-bold text-lg">
                    {pokemon.map((pokemon, index)=>{
                        return(<li className=""key={index}>{pokemon.name}</li>)
                    })}
                </div>
        </div>
    );
    
}
export default Api