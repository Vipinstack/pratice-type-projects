import React, { Component } from 'react';
import {Sum , Muli, Divi} from './Sum';


export class Home extends Component {
    render(props) {
        return (
            <div>
            
                <h1>that is my family {this.props.name}
                <Divi subject="Math" /></h1>
                <Sum name="vipin chauhan" />
                <h1>The next data on next Components in function {this.props.name}</h1>
                <Muli />

                
            </div>
        )
    }
}

export default Home 
