import React, { Component } from 'react';
import Axios from 'axios';

export class Users extends Component {

    constructor(props){
        super(props);
        this.state={users:[]}
    }

    componentDidMount(){
        const URL="https://jsonplaceholder.typicode.com/users";
        Axios.get(URL)
        .then(res => {
            console.log(res.data);
            this.setState({users:res.data});
        })
    }

    render() {
        return (
            <div>
               {this.state.users.map(user =>
               <div>
                   <ul>
                        <li>{user.id}</li>
                        <li>{user.name}</li>
                        <li>{user.username}</li>
                        <li>{user.email}</li>
                        <li>{user.address.zipcode}</li>
                   </ul>
               </div>
                
               )}
            </div>
        )
    }
}

export default Users;
