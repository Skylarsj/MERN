import React, {useState} from "react";
import Color from './boxGen'

const Box = (props) => {
    return(
        <div>
            <div class="w-10 h-10 border border-sky-500 bg-sky-500"/>
            <div class="w-{props.width} h-{props.height} border border-sky-500 bg-{props.color}"/>
        </div>
    );
};



export default Box;