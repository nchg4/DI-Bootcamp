import React from 'react';
import data from '../info.json';

class Example1 extends React.Component {
  render() {
    console.log('Example1 data:', data);
    if (!data || !data.SocialMedias) {
      console.error('SocialMedias data is missing or undefined');
      return <div>Error: Data not available</div>;
    }
    return (
      <div>
        <h2>Social Media</h2>
        <ul>
          {data.SocialMedias.map((social, index) => (
            <li key={index}>{social}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
