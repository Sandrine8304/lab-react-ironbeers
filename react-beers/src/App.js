import React from 'react';
import './App.css';
import Home from './components/home';
import { Switch, Route } from 'react-router-dom';
import Beers from './components/beers';
import RandomBeer from './components/random-beer';
import NewBeer from './components/new-beer';
import SingleBeer from './components/single-beer';

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/beers" component={ Beers } />
          <Route path="/random-beer" component={ RandomBeer } />
          <Route path="/new-beer" component={ NewBeer } />
          <Route path="/beers/:id" component={ SingleBeer } />
        </Switch>     
      </div>
    );

  }
  
}

export default App;
