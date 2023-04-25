import React from 'react';

const Main = (props) => {
    return(
    <div className="border-2 w-3/4 p-2 bg-[#e06666]">
        <p>Main</p>
        <div className="flex flex-wrap justify-between">
            {props.children}
        </div>

    </div>
    )
}

export default Main