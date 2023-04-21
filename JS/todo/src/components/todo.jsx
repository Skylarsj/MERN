import React, {useState} from 'react';

const Todo = ({list, setList}) => {

    const [todo, setTodo] = useState({
        name: "",
        id: 0,
        done: false
    });
    const [valid, setValid] = useState(true)

    const changeHandler = (e) => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    };

    const submitEvent = (e) => {

    if((todo.name.length) < 1){
        setValid(false)
        e.preventDefault();
        return;
    };
    
    setValid(true);

        e.preventDefault();

    setList([
        ...list, {
            name: todo.name,
            id: todo.id,
            done: false
        }
    ])

    setTodo({
        name:"",
        id: todo.id +1,
        done: false
    })

    };

    return(
        <div className="flex justify-center">
            <form onSubmit={submitEvent}>
                {valid ? null: <p>task must have a name</p>}
                <input className="w-3- h-3- m-3 p-1 border bg-green-200 rounded"
                        value={todo.name}
                        name="name"
                        type="text"
                        onChange={changeHandler}
                        placeholder="task">
                </input>
                <button className="rounded-full p-2 hover:bg-green-300 bg-green-600">
                    add to do
                </button>
            </form>
        </div>
    );
};

export default Todo