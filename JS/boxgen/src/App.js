import React, {useState} from 'react';
import './App.css';
import Color from './components/boxGen';
import Box from './components/box'


function App() {

  const [boxGen, SetBoxGen] = useState ([]);

  
  return (
    <div class="flex flex-col justify-center">
      <Color/>
      <Box/>
    </div>
  );
}

export default App;
