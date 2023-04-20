import React, {useState} from 'react';

const Color = ({boxGen, setBoxGen}) => {

    

    const [box, setBox] = useState({
        color: "",
        width: "",
        height: ""
    });
    const formUpdate = (e) =>{
        setBox({
            ...box,
            [e.target.name]: e.target.value
        })
    };
    const creatingBox = (e) => {

        e.preventDefault();

    setBoxGen([
        ...boxGen, {
            color: box.color,
            width: box.width + "px",
            height: box.height + "px"
        }
        ])

    setBox({
        color: "",
        width: "",
        height: ""
    });
    
    };
    return(
        <div class="flex justify-center">
            <form onSubmit={ creatingBox }>
                <div>
                    <input class="w-30 h-8 m-3 p-3 border border-sky-500" value={box.color} name="color" type="text" onChange={formUpdate} placeholder="color"/>

                    <input class="w-30 h-8 m-3 p-3 border border-sky-500" value={box.width} name="width" type="number" onChange={formUpdate} step="5" placeholder="width"/>

                    <input class="w-30 h-8 m-3 p-3 border border-sky-500" value={box.height} name="height" type="number" onChange={formUpdate} step="5" placeholder="height"/>

                    <button class="rounded-full w-20 border border-sky p-1 bg-sky-300">Submit</button>
                </div>
            </form>
        </div>
        );
};



export default Color;