import React from 'react';

const List = ({list}) => {

    console.log(list)
    return(
        <div className="flex justify-center">
            {
                list.map((item, index) => (
                    <div key={index}>

                    </div>
                ))
            }
        </div>

    )
}

export default List;