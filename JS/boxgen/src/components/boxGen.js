import React, {useState} from 'react';

const Color = (props) => {

    const {boxGen, setBoxGen} = props;
    
    const [box, setBox] = useState({
        color: "",
        width: 0,
        height: 0
    });

    const creatingBox = (e) => {

    setBox({
        ...box,
        [e.target.name]: e.target.value
    })

    setBoxGen([
        ...boxGen, {
            color: box.color,
            width: box.width + "px",
            height: box.height + "px"
        }
        ])
        
        e.preventDefault();

        console.log(box)

    };
    return(
        <div class="flex justify-center">
            <form onSubmit={ creatingBox }>
                <div>
                    <input class="w-30 h-8 m-3 p-3 border border-sky-500" value={box.color} name="color" type="text" onChange={creatingBox} placeholder="color"/>

                    <input class="w-30 h-8 m-3 p-3 border border-sky-500" value={box.width} name="width" type="text" onChange={creatingBox} placeholder="width"/>

                    <input class="w-30 h-8 m-3 p-3 border border-sky-500" value={box.height} name="height" type="text" onChange={creatingBox} placeholder="height"/>

                    <button class="rounded-full w-20 border border-sky p-1 bg-sky-300">Submit</button>
                </div>
            </form>
        </div>
        );
};



export default Color;