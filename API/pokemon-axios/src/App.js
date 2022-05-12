import logo from './logo.svg';
import './App.css';
import PokemonWithAxios from './components/PokemonWithAxios'

function App() {
  return ( <div className = "App container" >
    <h1 className = 'mt-2' > Gotta Catch Them All </h1> 
    <PokemonWithAxios> </PokemonWithAxios> 
    </div>
  );
}

export default App;