import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './header';

class RandomBeer extends React.Component {
    
    state = {
        beer : {}
    }
    
    getRandomBeer = () => {
        axios.get(`https://ih-beer-api.herokuapp.com/beers/random`)
          .then(responseFromApi => {
            let oneBeer = responseFromApi.data
            this.setState({beer: oneBeer})
            console.log("response:", oneBeer)
          })
          .catch(err => console.log('Error', err))
    }
    
    componentDidMount() {
        this.getRandomBeer();
    }

    render () {
        return (
        <div className="RandomBeerPage">
            <Link to={'/'}><Header /></Link> 
            <div className="RandomBeer">
                <img src={this.state.beer.image_url} alt=""/>
                <h2>{this.state.beer.name}</h2>
                <h2>{this.state.beer.tagline}</h2>
                <h2>{this.state.beer.first_brewed}</h2>
                <h2>{this.state.beer.attenuation_level}</h2>
                <h2>{this.state.beer.description}</h2>
                <h2>{this.state.beer.contributed_by}</h2>
            </div>
        </div>
        );
    }
}

export default RandomBeer;