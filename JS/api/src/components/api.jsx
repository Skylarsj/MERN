import React, {useState, useEffect} from 'react';
import logo from './pokeapi.png'
const Api = () => {

    const [pokemon, setPokemon] = useState([]);


    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => {
        // not the actual JSON response body but the entire HTTP response
        return response.json();
        }).then(response => {
            setPokemon(response.results)
        // we now run another promise to parse the HTTP response into usable JSON
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

// const Example = (props) => {
//     const [people, setPeople] = useState([]);

//     useEffect(() => {
//         fetch('https://swapi.dev/api/people/')
//             .then(response => response.json())
//             .then(response => setPeople(response.results))
//     }, []);

//     return (
//         <div>
//             {people.length > 0 && people.map((person, index)=>{
//                 return (<div key={index}>{person.name}</div>)
//             })}
//         </div>
//     );
// }
// export default Example;
