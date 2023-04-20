import React, {useState} from 'react';
import './App.css';
import Color from './components/boxGen';
import Box from './components/box'


function App() {

  const [boxGen, setBoxGen] = useState([]);


  return (
    <div className="flex flex-col justify-center">
      <Color boxGen={ boxGen } setBoxGen={ setBoxGen }/>
      <Box boxGen={ boxGen }/>
    </div>
  );
}

export default App;
