import React, {useState} from 'react';

const Todo = ({list, setList}) => {

    const [todo, setTodo] = useState({
        name: "",
        done: false
    });

    const changeHandler = (e) => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    };

    const submitEvent = (e) => {

        e.preventDefault();

    setList([
        ...list, {
            name: todo.name,
            done: false
        }
    ])

    setTodo({
        name:"",
        done: false
    })

    };

    return(
        <div className="flex justify-center">
            <form onSubmit={submitEvent}>
                <input className="w-3- h-3- m-3 p-1 border bg-green-200 rounded"
                        value={todo.name}
                        name="name"
                        type="text"
                        onChange={changeHandler}
                        placeholder="name">
                </input>

                <button className="rounded-full p-2 bg-green-400">
                    add to ToDo
                </button>
            </form>
        </div>
    );
};

export default Todo