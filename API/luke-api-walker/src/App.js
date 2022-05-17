import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Results from './components/Results';
import {
  BrowserRouter,
  // This allows us to enable routing 
  Switch,
  // Switch allows us to render a component that we want to keep on our landing page 
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <div className="App container">
      <h1>Luke API Walker</h1>
      <Search></Search>
    </div>
    <Switch>
      <Route exact path= "/:categ/:id">
        {/* categ and id are called route parameters */}
        <Results></Results>
      </Route>
    </Switch>
  </ BrowserRouter>
    
  
  );
}

export default App;
