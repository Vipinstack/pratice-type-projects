import React, { Component } from 'react'

const data=['English','Hindi','Math','Object'];
const theUpDate='the father of dad';

 class Sum extends Component {
   
    render(props) {
        return (
            <div>
                <h1>
                {data.map(c=>
                    <li>{c}</li>
                  
                )}  <li>{theUpDate}</li>
                </h1>
                <h2>Data props {this.props.name}</h2>
            </div>
        )
    }
}



 class Muli extends Component {
    render() {
        return (
            <div>
                <h1>hello..Data ||</h1>
            </div>
        )
    }
}


class Divi extends Component {
    render(props) {
        return (
            <div>
                <h1>hello..Divison |{this.props.subject}|</h1>
            </div>
        )
    }
}

export {Sum , Muli, Divi}


