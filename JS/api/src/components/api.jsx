import React, {useState, useEffect} from 'react';

const Api = () => {

    const [Pokemon, setPokemon] = useState([]);


    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
        // not the actual JSON response body but the entire HTTP response
        return response.json();
        }).then(response => {
        // we now run another promise to parse the HTTP response into usable JSON
        console.log(response);
        }).catch(err=>{
        console.log(err);
        });
    }, []);
    
    return (
        <div className="container">

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
