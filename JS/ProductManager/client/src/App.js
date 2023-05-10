import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './views/Main'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/products"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;