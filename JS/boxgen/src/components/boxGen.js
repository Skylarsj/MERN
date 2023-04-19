import React, {useState} from 'react';
import Box from './box'

const Color = () => {
    
    const [color, setColor] = useState({
        color: "",
        width: "",
        height: ""
    });

    const creatingColor = (e) => {
        setColor({
            ...color,
            [e.target.name]: e.target.value
        })
        
        console.log(color)
        
        e.preventDefault()

    };
    return(
        <div class="flex justify-center">
            <form onSubmit={ creatingColor }>
                <div>
                    <input class="w-30 h-8 m-3 p-3 border border-sky-500" id="color" name="color" type="text" placeholder="Color"/>

                    <input class="w-30 h-8 m-3 p-3 border border-sky-500" id="width" name="width" type="text" placeholder="width"/>

                    <input class="w-30 h-8 m-3 p-3 border border-sky-500" id="height" name="height" type="text" placeholder="height"/>

                    <button class="rounded-full w-20 border border-sky p-1 bg-sky-300">Submit</button>
                </div>
            </form>
        </div>
        );
};



export default Color;