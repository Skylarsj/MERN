import React, {useState} from 'react';
import './App.css';
import Todo from "./components/todo";
import List from "./components/done"


function App() {

  const [list, setList] = useState([]);
  
  return (
    <div className="App flex-col justify-center">
      <h1 className="font-bold">To Do List</h1>
      <Todo list={list} setList={setList}/>
      <List list={list}/>
    </div>
  );
}

export default App;
