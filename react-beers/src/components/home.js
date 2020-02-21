import React from 'react';
import SectionHome from './sectionHome';
import beers from './beers.png';
import randomBeer from './random-beer.png';
import newBeer from './new-beer.png';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Beers from './beers';
import RandomBeer from './random-beer';
import NewBeer from './new-beer';



class Home extends React.Component {
    render () {
        return (
            <div className="HomePage">
                <Link to={"/beers"} ><SectionHome image={beers} title={"All Beers"} /></Link>
                <Link to={"/random-beer"} ><SectionHome image={randomBeer} title={"Random Beer"} /></Link>
                <Link to={"/new-beer"} ><SectionHome image={newBeer} title={"New Beer"} /></Link>
           
                <Switch>
                    <Route path="/beers" component={ Beers } />
                    <Route path="/random-beer" component={ RandomBeer } />
                    <Route path="/new-beer" component={ NewBeer } />
                    <Route path="/" component={ Home } />
                </Switch>
            </div>

        );
    }
}

export default Home;
