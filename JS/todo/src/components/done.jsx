import classNames from 'classnames';
import React from 'react';

const List = ({list, setList}) => {

    const done = (item) => {

        item.done = !item.done;
        setList([...list]);
    }

    const remove = (item) => {
        const updatedList = list.filter(listItem => listItem !== item);
        setList(updatedList);
    }

    return(
        <div className="flex w-64 flex-col-reverse mx-auto">
            {
                list.map((item, index) => (
                <div className="flex">
                    <div onClick={() => done(item)}
                        key={index} className={item.done ? 'flex items-center justify-between h-10 w-full rounded-md mt-5 font-bold pl-3 bg-green-500' : 'flex items-center h-10 w-full rounded-md mt-5 font-bold pl-3 bg-sky-500 hover:bg-sky-700'}>
                        {item.name}
                    </div>
                        {item.done && (
                            <button onClick={() => remove(item)} className="flex justify-center text-xs font-thin items-center text-center p-2 rounded-md mt-5 ml-1 bg-rose-700">
                            Delete
                            </button>
                        )}
                </div>
                ))
            }
        </div>

    )
}

export default List;

