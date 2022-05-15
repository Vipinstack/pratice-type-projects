import React, { Component } from 'react'

export class Photos extends Component {

constructor(props){
    super(props);
    this.state={photos:[]}
}

componentDidMount(){
    const URL="https://jsonplaceholder.typicode.com/photos";
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        this.setState({photos:data});
    })
}

    render() {
        return (
            <div>
                <h1>Photos.....</h1>
                {this.state.photos.map(photo=>
                
                <div>
                <table border="1" style={{backgroundColor:"black", color:"white"}}>
                       <tr>
                           
                           <td>{photo.id}</td>
                           </tr>
                   </table>
                
                <ul>
                    <li>{photo.title}</li>
                    <li style={{color:"black", fontWeight:"bold", textDecoration:"underline"}}>"{photo.url}"</li>
                </ul>
                  
                </div>
                
                )}
            </div>
        )
    }
}

export default Photos



