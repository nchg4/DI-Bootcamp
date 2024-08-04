import React from 'react';
import data from '../info.json';

class Example3 extends React.Component {
  render() {
    return (
      <div>
        <h2>Experiences</h2>
        {data.Experiences.map((experience, index) => (
          <div key={index}>
            <h3>{experience.company}</h3>
            <p>Position: {experience.position}</p>
            <p>Year: {experience.year}</p>
            <p>Description: {experience.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;

