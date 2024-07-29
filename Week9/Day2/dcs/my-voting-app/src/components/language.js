import React from "react";
import "./language.css";

export class Language extends React.Component {
    handleClick = () => {
        
        this.props.incrementCount();
    }
    render() {
        return (
            <div className="language">
                <span>{this.props.votes}</span>
                <span>{this.props.name}</span>
                <button onClick={this.handleClick}>Click Here</button>
            </div>
        );
    }
}