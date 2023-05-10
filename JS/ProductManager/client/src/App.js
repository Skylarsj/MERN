import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './views/Main'
import Detail from './components/Detail';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/product"/>
          <Route element={<Detail/>} path="/product/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;