import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class NewBeer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            tagline: '',
            description: '',
            firstBrewed: '',
            brewersTips: '',
            attenuationLevel : '',
            contributedBy: ''
        }
    }


     handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    
    // Call the parent the new movie datas
    this.props.addTheMovie(this.state); {/* 👈 */}
    
    // RESET
    this.setState({
            name: '',
            tagline: '',
            description: '',
            firstBrewed: '',
            brewersTips: '',
            attenuationLevel : '',
            contributedBy: '' 
    })  
  } 

    render () {
        return (
            <div className="NewBeer">
            
                <h2>NewBeer page</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} />

                    <label>Tagline</label>
                    <input type="text" name="tagline" value={this.state.tagline}/>
                    
                    <label>Tagline</label>
                    <input type="text" name="description" value={this.state.description}/>
                </form>


                
            </div>

        );
    }

}

export default NewBeer;