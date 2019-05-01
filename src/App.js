import React from 'react';
import './App.css';
import Home from './components/Home';
import Cats from './components/Cats';
import Cat from './components/Cat';
import About from './components/About';
import PageNotFound from './components/PageNotFound';

import {Link, Route, Switch} from 'react-router-dom'

//we are making a default page to show when the route is bad. so we import Switch
//wrap all your routes in that Switch.
//if you go to a route you haven't defined it will show the page not found component
//useful when you are dynamically generating routes and one might go wrong, you can have this default page that shows when they go to a route that doesn't exist.



//to pass custom props to a Routed Component you need a technique called render props.
//a function that accepts props that renders JSX, route automatically has history,match,location

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/cats">Cats</Link>
      <Link to="/nowhere">NOWHERE MAN</Link>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/cats" component={Cats}/>
        <Route component={PageNotFound}/>
      </Switch>
      <Route path="/cats/:cat" component={Cat}/>
      <Route path="/felines" 
        render={(props) =>(<Cats {...props} cats={this.state.cats}/>)}
        />
    </div>
  );
}

export default App;
