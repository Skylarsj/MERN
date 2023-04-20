import React, {useState} from 'react';
import './App.css';
import Todo from "./components/todo";


function App() {

  const [list, setList] = useState([]);
  
  return (
    <div className="App">
      <h1 className="font-bold">To Do List</h1>
      <Todo list={list} setList={setList}/>
    </div>
  );
}

export default App;
