import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={name:"Vipin Chauhan", Value: 23, course:["Vipin chauhan","Sachin Chauhan", "Kapil Chauhan"]};
    }

  upData=()=>
  {
    this.setState({name:"Kapil Chauhan", Value:22});
}

    render() {
        return (
            <div>
                <h1>That is a Component</h1>
                <p>{this.state.name} Age {this.state.Value}</p>
                <button onClick={this.upData}>Change Data</button>
                <ol>
                    {this.state.course.map(c =>
                        <li>{c}</li>
                    )}
                </ol>
            </div>
        )
    }
}
