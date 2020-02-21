import React from 'react';
import './App.css';
import Home from './components/home';
// import { Switch, Route } from 'react-router-dom';
// import Beers from './components/beers';
// import RandomBeer from './components/random-beer';
// import NewBeer from './components/new-beer';



class App extends React.Component {

  render () {
    return (
      <div className="App">
        <Home />        
      </div>
    );

  }
  
}

export default App;
