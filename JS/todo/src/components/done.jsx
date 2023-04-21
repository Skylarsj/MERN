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
                        key={index} className={item.done ? 'flex items-center justify-between h-10 w-full rounded-md mt-5 font-bold pl-3 bg-green-500' : 'flex items-center h-10 w-full rounded-md mt-5 font-bold pl-3 bg-sky-500 hover:bg-sky-700'}>
                        {item.name}
                        {item.done && (
                            <button className="flex justify-center text-xs font-thin items-center text-center p-2 rounded-full border-2 border-[#fa8072] mb-8 bg-rose-700">
                            Delete
                            </button>
                        )}
                    </div>
                </div>
                ))
            }
        </div>

    )
}

export default List;

