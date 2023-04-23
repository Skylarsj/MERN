import React, {useState, useEffect} from 'react';
import logo from './pokeapi.png'
const Api = () => {

    const [pokemon, setPokemon] = useState([]);


    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => {
        return response.json();
        }).then(response => {
            setPokemon(response.results)
        console.log(response);
        }).catch(err=>{
        console.log(err);
        });
    }, []);
    
    return (
        <div className="mx-auto w-full">
            <div className="flex bg-[#EF5350] w-full h-15">
                <img clasName="pl-10"src={logo} alt="logo"/>
            </div>
                <div className="body font-bold text-lg">
                    {pokemon.map((pokemon, index)=>{
                        return(<li key={index}>{pokemon.name}</li>)
                    })}
                </div>
        </div>
    );
    
}
export default Api