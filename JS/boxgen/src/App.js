import React, {useState} from 'react';
import './App.css';
import Color from './components/boxGen';
import Box from './components/box'


function App() {

  const [boxGen, SetBoxGen] = useState ([]);


  return (
    <div className="flex flex-col justify-center">
      <Color boxgen={ boxGen } SetBoxGen={ SetBoxGen }/>
    </div>
  );
}

export default App;
