import React from 'react';

const List = ({list}) => {

    console.log(list)

    return(
        <div className="flex w-64 flex-col-reverse mx-auto">
            {
                list.map((item, index) => (
                    <button key={index} className="
                    flex
                    items-center h-10 w-full
                    rounded-md
                    m-3
                    bg-sky-500
                    hover:bg-sky-700
                    font-bold
                    pl-3">
                        {item.name}
                    </button>
                ))
            }
        </div>

    )
}

export default List;