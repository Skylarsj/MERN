import classNames from 'classnames';
import React from 'react';

const List = ({list, setList}) => {

    const done = (item) => {

        if (item.done === true)
            return;

        item.done = !item.done;
        setList([...list]);
        

        console.log(item)
        console.log(list)
    }



    return(
        <div className="flex w-64 flex-col-reverse mx-auto">
            {
                list.map((item, index) => (
                <div>
                    <div onClick={() => done(item)}
                        key={index} className={item.done ? 'flex items-center h-10 w-full rounded-md m-3 font-bold pl-3 bg-green-500 hover:bg-green-700' : 'flex items-center h-10 w-full rounded-md m-3 font-bold pl-3 bg-sky-500 hover:bg-sky-700'}>
                        {item.name}
                    </div>
                </div>
                ))
            }
        </div>

    )
}

export default List;

