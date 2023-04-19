import React from "react";

const Box = (props) => {

    const { boxGen } = props

    return(
        <div>
            <div class="w-10 h-10 border border-red-500 bg-sky-500"/>
            {
                boxGen.map((box, index) => (
                <div key={index} style={{
                    width: box.width,
                    height: box.height,
                    backgroundColor: box.color
                }}>
                </div>
                ))
            }
        </div>
    );
};



export default Box;