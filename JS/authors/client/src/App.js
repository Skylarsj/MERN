import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';
import Main from './views/Main'
import EditAuthorForm from './components/EditAuthor';
import AuthorForm from './components/AuthorForm';
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route element={<Main/>} path="/author"/>
          <Route element={<AuthorForm/>} path="/authorCreate"/>
          <Route element={<Detail/>} path="/author/:id"/>
          <Route element={<EditAuthorForm/>} path="/author/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
