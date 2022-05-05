import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Playoff Buckets</h1>
      <Card 
      firstName = {"Jason"}
      lastName = {"Tatum"}
      age = {24}
      hairColor = {"Black"}> 
      </Card>
      <Card firstName = {"Ja"}
      lastName = {"Morant"}
      age = {22}
      hairColor = {"Black"} > </Card>
      <Card firstName = {"Devin"}
      lastName = {"Booker"}
      age = {25}
      hairColor = {"Brown"} > </Card>
      <Card firstName = {"Chris"}
      lastName = {"Paul"}
      age = {36}
      hairColor = {"Scalp"} > </Card>
    </div>
  );
}

export default App;
