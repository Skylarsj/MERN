import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home'
    
function App() {
  return (
    <div className="m-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route exact path="/:arg" element={<Home />} />
          <Route exact path="/:arg/:argcolor/:argbg" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
    
export default App