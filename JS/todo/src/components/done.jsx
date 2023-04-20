import React from 'react';

const List = ({list}) => {

    console.log(list)

    return(
        <div className="flex justify-center">
            {
                list.map((item, index) => (
                    <div key={index} className="h-10 w-1/4 border m-5">
                        <p className="font-bold">{item.name}</p>
                    </div>
                ))
            }
        </div>

    )
}

export default List;