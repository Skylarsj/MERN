import React, {useState} from 'react';

const Color = (props) => {
    
    const [color, setColor] = useState({
        color: ""
    });

    const creatingColor = (e) => {
        setColor({
            ...color,
            [e.targe.name]: e.target.value
        })
    };
    return(
        <div>
            <form onSubmit={ creatingColor }>
                <div>
                    <label>First Name: </label> 
                    <input class="w-30 m-3 border border-sky-500" id="color" name="color" type="text" onChange={creatingColor} />
                </div>
            </form>
        </div>
        );
};



export default Color;