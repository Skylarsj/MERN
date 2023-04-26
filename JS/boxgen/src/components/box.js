import React from "react";

const Box = ({boxGen}) => {

    console.log(boxGen)
    const Update = Ola
    return(
        <div>
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