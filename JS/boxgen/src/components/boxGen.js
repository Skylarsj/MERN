import React, {useState} from 'react';

const Color = (props) => {
    
    const [color, setColor] = useState({
        color: "",
        width: "",
        height: ""
    });

    const creatingColor = (e) => {
        e.preventdfault();
        setColor({
            ...color,
            [e.target.name]: e.target.value
        })
    };
    return(
        <div class="flex justify-center">
            <form onSubmit={ creatingColor }>
                <div>
                    <input class="w-30 h-8 m-3 p-3 border border-sky-500" id="color" name="color" type="text" onChange={creatingColor} placeholder="Color"/>

                    <input class="w-30 h-8 m-3 p-3 border border-sky-500" id="width" name="width" type="text" onChange={creatingColor} placeholder="width"/>

                    <input class="w-30 h-8 m-3 p-3 border border-sky-500" id="height" name="height" type="text" onChange={creatingColor} placeholder="height"/>

                    <button class="rounded-full w-20 border border-sky p-1 bg-sky-300">Submit</button>
                </div>
            </form>
        </div>
        );
};



export default Color;