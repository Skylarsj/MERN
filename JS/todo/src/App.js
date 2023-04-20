import React, {useState} from 'react';
import './App.css';
import Todo from "./components/todo";
import List from "./components/done"


function App() {

  const [list, setList] = useState([]);
  
  return (
    <div className="App">
      <h1 className="font-bold flex justify-center">To Do List</h1>
      <Todo list={list} setList={setList}/>
      <List list={list} setLis={setList}/>
    </div>
  );
}

export default App;
