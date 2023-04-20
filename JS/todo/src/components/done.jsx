import React from 'react';

const List = ({list, setList}) => {

    const testing = (item) => {
        
        console.log(item.id)
        
    }

    return(
        <div className="flex w-64 flex-col-reverse mx-auto">
            {
                list.map((item, index) => (
                    <div onClick={() => testing(item)}
                    key={index} className="
                        flex
                        items-center h-10 w-full
                        rounded-md
                        m-3
                        bg-sky-500
                        hover:bg-sky-700
                        font-bold
                        pl-3">
                            {item.name}
                    </div>
                ))
            }
        </div>

    )
}

export default List;