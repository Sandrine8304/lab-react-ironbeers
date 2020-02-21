import React from 'react';
import { LoremIpsum } from "lorem-ipsum";


class SectionHome extends React.Component {

    render () {
        const lorem = new LoremIpsum({
            sentencesPerParagraph: {
              max: 8,
              min: 4
            },
            wordsPerSentence: {
              max: 16,
              min: 4
            }
          });
          
        return (
            <div className="SectionHome">
                <img src={this.props.image} alt="" />
                <h2>{this.props.title}</h2>
                <p>{lorem.generateSentences(3)}</p>
            </div>
        );
    }
}

export default SectionHome;