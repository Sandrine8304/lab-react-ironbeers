import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './header';


class NewBeer extends React.Component {

    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level : '',
        contributed_by: ''
        
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        
        const name = this.state.name;
        const tagline = this.state.tagline;
        const description = this.state.description;
        const first_brewed = this.state.first_brewed;
        const brewers_tips = this.state.brewers_tips;
        const attenuation_level = this.state.attenuation_level;
        const contributed_by = this.state.contributed_by;

        axios.post("https://ih-beer-api.herokuapp.com/beers/new", { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by })
        .then(() => {
            alert('Beer has been successfully added !!!')
            // Reset form
            this.setState({
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level : '',
            contributed_by: '' 
            })  
        })
        .catch(error => console.log(error))
    }   

    render () {
        return (
            <div className="NewBeer">
                <Link to={'/'}><Header /></Link>
                <form className="formNewBeer" onSubmit={this.handleFormSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />

                    <label>Tagline</label>
                    <input type="text" name="tagline" value={this.state.tagline} onChange={this.handleChange} />
                    
                    <label>Description</label>
                    <input className="description" type="text" name="description" value={this.state.description} onChange={this.handleChange} />

                    <label>First Brewed</label>
                    <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.handleChange} />

                    <label>Brewers Tips</label>
                    <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={this.handleChange} />

                    <label>Attenuation Level</label>
                    <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleChange} />

                    <label>Contributed by</label>
                    <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.handleChange} />

                    <button type="submit">ADD NEW</button>
                </form> 
            </div>

        );
    }

}

export default NewBeer;