import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './header';

class Beers extends React.Component {

    state = {
        beers: []
    }

    getAllBeers = () =>{
        axios.get(`https://ih-beer-api.herokuapp.com/beers`)
          .then(responseFromApi => {
            this.setState({beers: responseFromApi.data})
            console.log("response:", responseFromApi.data)
          })
          .catch(err => console.log('Error', err))
      }
    
      componentDidMount() {
        this.getAllBeers();
      }

    render (){
      return (
        <div className="Beers">
          <Link to={'/'}><Header /></Link> 

          { this.state.beers.map( beer => {
            return (
              <Link to={`/beers/${beer._id}`} style={{ textDecoration: 'none' }} key={beer._id}>
                <div className="beerBox" >
                  <div className="imgBeer"><img src={beer.image_url} alt="pictureBeer" /></div>
                  <div className="infoBeer">
                    <h1>{beer.name}</h1>
                    <h2>{beer.tagline}</h2>
                    <h3>Created by: {beer.contributed_by}</h3>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      );
    }
}

export default Beers;