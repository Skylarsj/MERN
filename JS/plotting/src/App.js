import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';
import Main from './components/main';
import SubContent from './components/subContent';
import Ad from './components/advertisement';

function App() {
  return (
    <div className="App container p-2 m-auto bg-[#dddddd]">
      <Header/>
      <div className="flex">
      <Navigation/>
        <Main>
          <SubContent/>
          <SubContent/>
          <SubContent/>
          <Ad/>
        </Main>
      </div>
    </div>
  );
}

export default App;
