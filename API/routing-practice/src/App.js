import React from "react";
import Hello from "./components/Hello";
import Numbers from "./components/Numbers";
import Welcome from "./components/Welcome";
import Color from "./components/Color";

// import { useParams } from "react-router";
// these routes get imported from your react-router-dom 
import {
  BrowserRouter,
  // will enable routing for the application, routes wont render without this 
  Link,
  Switch,
  // Switch gets used when you want to conditionally render things on your page
  // must wrap componenets/elements in a switch tag
  Route
  // Route lets us specify where we want elements rendered with the path element 
} from "react-router-dom";
    
// const Location = (props) => {
//   const { city } = useParams();
    
//   return (
//     <h1>Welcome to { city }!</h1>
//   );
// }
// const Location = (props) => {
//   return (
//     <h1>Welcome</h1>
//   );
// }
    
function App() {
  return (
    <BrowserRouter>
    <p>
        <Link to="/home">Home</Link>
        | 
        <Link to="/number">Number</Link>  
        |
        <Link to="/hello">Hello</Link>
        | 
        <Link to = "/hi/blue/red" > Hello Colors </Link>  
          {/* {/link does the same as an a href but it doesnt reload the page*  */} 
      </p>
      <Switch>
        <Route exact path = "/home" >
          <Welcome></Welcome>
        </Route>
      </Switch>
      <Switch>
        < Route exact path = "/:num" >
          <Numbers></Numbers>
        </Route>
      </Switch>
      {/* <Switch>
        <Route exact path = "/:wordle">
          <Hello></Hello>
        </Route>
      </Switch> */}
      <Switch>
        <Route path="/:word/:color/:color2">
        <Color></Color>
        </Route>
      </Switch>
    </BrowserRouter>
    // variable inside a route is called a route parameter ex: '/route/:id'
  );
}
    
export default App;