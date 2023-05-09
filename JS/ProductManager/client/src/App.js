import ProductForm from './components/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="App w-[250px] mx-auto mt-5">
        <ProductForm/>
      </div>
      <BrowserRouter>
        <Routes>
          <Route element={<ProductForm/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;