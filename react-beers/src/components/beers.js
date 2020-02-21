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
                <h2>Beers page</h2>
                <Link to={'/'}><Header /></Link> 

            { this.state.beers.map( beer => {
                return (
                <div key={beer._id}>
                <Link to={`/beers/${beer._id}`}>
                  <h3>{beer.name}</h3>
                </Link>
                </div>
             )})
            }
            </div>
        );
    }

}

export default Beers;