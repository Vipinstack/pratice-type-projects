import Axios from 'axios';
import React, { Component } from 'react'


export class Api extends Component {
    constructor(props)
    {
        super(props);
        this.state={posts:[]}
    }


componentDidMount(){
    const URL="https://api.covid19india.org/data.json";
    // fetch(URL)
    // .then(res=>res.json())
    // .then(data=>{
    //     console.log(data);
    //     this.setState({posts:data});
    Axios.get(URL)
    .then(res=> {
        console.log(res.data);   
        this.setState({posts:res.data});
    });

    
}

    render() {
        return (
            <div>
                <h1>Helo Lastest....</h1>
                {this.state.posts.map((post,index)=>
                    <h2 key={index}>{post.dailyconfirmeds}</h2>
                )}

            </div>
        )
    }
}

export default Api
