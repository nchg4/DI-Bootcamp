// Exercise3.js
import React, { Component } from 'react';
import './excercise.css';

const style_header = {
  textAlign: "center",
    fontFamily: "Arial",
    fontSize: "20px",
};

class Exercise extends Component {
  render() {
    return (
      <div>
        <h1 style={style_header}>This is a header</h1>
          <p className="para">This is a paragraph.</p>
        <center>
          <a href="https://react.dev/">This is a link</a>
        <br/>
          <br/>
        <form>
          <input type="text" placeholder='This is a text box'/>
            <button type="submit">Submit</button>
        </form><br/>
          <p>This is an image:</p>
        <img src="https://cdn.sanity.io/images/tlr8oxjg/production/2df8638e709b31e67768e848c1b38b83bad4df41-1456x816.png?w=3840&q=80&fit=clip&auto=format" height={200} width={345} alt="Placeholder"/>
          <br/>
        <p>This is a list:</p>
          </center>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ul>
            <li>Pizza</li>
              <li>Pasta</li>
            <li>Salad</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Exercise;