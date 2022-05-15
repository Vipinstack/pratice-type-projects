import React, { Component } from 'react'

export class Posts extends Component {

constructor(props){
    super(props);
    this.state={posts:[]}
}

componentDidMount(){
    const URL="https://jsonplaceholder.typicode.com/posts";
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        this.setState({posts:data});
    })

}



render() {
        return (
            <div>
             <h1>Posts...</h1>
                {this.state.posts.map(post => 
                    <div>

                        <h3>{post.title}</h3>
                        <article>{post.body}</article>
                        <hr/>

                    </div>
                )}
            </div>
        )
    }
}

export default Posts;
