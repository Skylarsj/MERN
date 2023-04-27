import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
//Remember, we can write these functional components in their own files 
    //to be exported and imported to the App component.
    //We've combined them here to simplify our example.
const Home = (props) => { 
  return (
    <h1 style={{color: "red"}}>Home Component</h1>
  );
}
    
const About = (props) => {
  return (
    <h1 style={{color: "blue"}}>About Component</h1>
  );
}
    
function App() {
  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
    
export default App