import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main'
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route element={<Main/>} path="/product"/>
          <Route element={<Detail/>} path="/product/:id"/>
          <Route element={<EditProductForm/>} path="/product/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
