import React from 'react';
import Form from './components/Form';
import AllProducts from './components/AllProducts' 
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';
import {BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
  <BrowserRouter>
    <div className="App container mt-5">
      <center>
      <h1>Product Manager</h1>
      <hr></hr>
        <Switch>
          <Route exact path="/">
        <Form></Form> 
        <AllProducts></AllProducts>
          </Route>
          <Route exact path="/product/:id">
          <OneProduct></OneProduct>
          </Route>
          <Route exact path="/:id/edit">
          <EditProduct></EditProduct>
          </Route>
      </Switch>
      </center>
    </div>
  </BrowserRouter>
  );
}


export default App;