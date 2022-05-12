import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div className="App container">
      <h1 className='mt-2'>Gotta Catch Them All</h1>
      <Pokemon></Pokemon>
    </div>
  );
}

export default App;
