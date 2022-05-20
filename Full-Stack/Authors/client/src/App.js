import React from 'react';
import AllAuthors from './components/AllAuthors';
import EditAuthor from './components/EditAuthor';
import NewAuthor from './components/NewAuthor';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App container mt-5">
      <center>
      <h1>Favorite Authors</h1>
      <hr></hr>
      <Switch>
        <Route exact path="/">
          <AllAuthors></AllAuthors>
        </Route>
        <Route exact path="/:id/edit"> 
        <EditAuthor></EditAuthor>
        </Route>
        <Route exact path="/author/new">
              <NewAuthor> </NewAuthor>
        </Route>
      </Switch>
      </center>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
