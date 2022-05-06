import logo from './logo.svg';
import './App.css';
import Buckets from './components/Buckets';

function App() {
  return (
    <div className="App">
      <h1>Playoff Buckets</h1>
      <Buckets firstName ={"Jason"}lastName ={"Tatum"}age ={23} hairColor ={"Black"}> </Buckets> 
      <Buckets firstName ={"Chris"}lastName ={"Paul"}age ={37} hairColor ={"Scalp"}> </Buckets> 
      <Buckets firstName ={"Luka"}lastName ={"Dončić"}age ={22} hairColor ={"Black"}></Buckets> 
      <Buckets firstName ={"Ja"}lastName ={"Morant"}age ={22} hairColor ={"Black"}></Buckets>
    </div>
  );
}

export default App;
