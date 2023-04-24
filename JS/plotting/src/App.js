import './App.css';
import Header from './components/header'
import Navigation from './components/navigation'
import Main from './components/main'

function App() {
  return (
    <div className="App container p-2 m-auto bg-[#dddddd]">
      <Header/>
      <div className="flex">
      <Navigation/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
