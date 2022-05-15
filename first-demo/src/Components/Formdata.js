import React, { Component } from 'react';

let regForName=RegExp(/^[a-zA-Z ] +$/);

export class Formdata extends Component {

    constructor(props){
       super(props);
       this.state={name:' ', errors:{name:' '}}
   }
   
    handler=(event)=>{
        let {name,value}=event.target;
        // console.log(name+"..."+value);
        let errors=this.state.errors;
        this.setState({[name]:value});

        this.setState({errors,[name]:value},()=>{
            console.log(errors);
        });
        
        switch(name){
            case 'name' : errors.name=regForName.test(value)? " " : " Only Alphabate Allow  ";
            break;

            case 'Last' : errors.name=regForName.test(value)? " " : " Only Alphabate Allow  ";
            break;

            case 'sunbject' : errors.name=regForName.test(value)? " " : " Only Alphabate Allow  ";
            break;

            case 'Message' : errors.name=regForName.test(value)? " " : " Only Alphabate Allow  ";
            break;
        }

}

    postContact=(event)=>{
        event.preventDefault();
        console.log(this.state);
}

    render() {

        const {errors}=this.state;

        return (
            <>
                <div>
                    <form onSubmit={this.postContact}>
                        <input type='text' name='name'  placeholder='First Name' onChange={this.handler}/>{errors.name.length>0 && <span className="danger">{errors.name}</span>}<br/><br/>
                        <input type='text' name='Last'  placeholder='Last Name'  onChange={this.handler}/>{errors.name.length>0 && <span className="danger">{errors.name}</span>}<br/> <br/>
                        <input type='text' name='Subject'  placeholder='Subject' onChange={this.handler}/>{errors.name.length>0 && <span className="danger">{errors.name}</span>}<br/><br/>
                        <input type='text' name='Message'  placeholder='Message'  onChange={this.handler}/>{errors.name.length>0 && <span className="danger">{errors.name}</span>}<br/> <br/>

                        <button type="submit" name="submit">Click Me</button>
                      
                        {this.state.post.map(c=>
                            <li>{c.title}</li>
                        )}

                    </form>
                </div>


            </>

            
)
    }
}

export default Formdata
