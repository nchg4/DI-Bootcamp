import React from 'react';
import { Language } from './components/language'; 

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaScript", votes: 0 },
        { name: "Java", votes: 0 },
        {name: "HTML", votes: 0},
        {name: "CSS", votes:0},
        {name: "React", votes: 0},
        {name: "Node", votes: 0},
        {name: "Express", votes: 0}
      ],
    };
  }
incrementCount = (languageName) => {
  console.log("languageName:", languageName);
  const languageToUpdate = this.state.languages.find(language => language.name === languageName);
  const newCount = {languageToUpdate, votes: languageToUpdate.votes ++}  
  this.setState(newCount);
};
  render() {
    return (
      <>
        <h1>Vote for your favorite language</h1>
        <div className='languages'>
        {this.state.languages.map((language, index) => (
          <Language 
          name={language.name} 
          votes={language.votes}
           key={index} 
          incrementCount={()=>this.incrementCount(language.name)}/>
        ))}
        </div>
      </>
    );
  }
}

export default App;