import React, { Component } from 'react';

let regForEmail=RegExp();
let regForName=RegExp();
export class Form extends Component {

constructor(props){
    super(props);
    this.state={name:" ", email:" ", subject:" ", message:" ", error:{
        name:" ",
        email:" ",
        subject:" ",
        message:" "
    }}
}

handler=(event)=>{
    let {name,value}=event.target;
    let error=this.state.error;
    switch (name) {
        case 'name': error.name=regForName.test(value)?" ":"Only Alphabate allow";            
            break;

        case 'email': error.name=regForEmail.test(value)?"  ":"Only allow character";            
        break;

        case 'subject': error.name=value.length <5?" Subject must be 5 character long ":" ";            
        break;

        case 'message': error.name=value.length <5?" Message must be 5 character long ":" ";            
        break;
    
        default:
            break;
    }
    this.setState({error,[name]:value}, ()=>{
        console.log(error);
    })
    this.setState({[name]:value});
    // console.log(name + " " + value);
}

postContact = (event) =>{
    event.preventDefault();
    console.log(this.state);
}

    
    render() {
        const {error}=this.state;
        return (
            <div>
               <div className="col-sm-8">
                        <div className="contact-form">
                            <h2 className="title text-center">Get In Touch</h2>
                            <div className="status alert alert-success" style={{display: 'none'}}></div>

                            <form id="main-contact-form" className="contact-form row" name="contact-form" method="post" onSubmit={this.postContact}>
                                <div className="form-group col-md-6">
                                    <input type="text" name="name" className="form-control" required="required" placeholder="Name" onChange={this.handler} />
                                    {error.name.length>0 && <span className="alert alert-danger">{error.name}</span>}
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="email" name="email" className="form-control" required="required" placeholder="Email" onChange={this.handler} />
                                    {error.email.length>0 && <span className="alert alert-danger">{error.email}</span>}
                                </div>
                                <div className="form-group col-md-12">
                                    <input type="text" name="subject" className="form-control" required="required" placeholder="Subject" onChange={this.handler} />
                                    {error.subject.length>0 && <span className="alert alert-danger">{error.subject}</span>}
                                </div>
                                <div className="form-group col-md-12">
                                    <textarea name="message" id="message" required="required" className="form-control" rows="8" placeholder="Your Message Here" onChange={this.handler} ></textarea>
                                    {error.message.length>0 && <span className="alert alert-danger">{error.message}</span>}
                                </div>                        
                                <div className="form-group col-md-12">
                                    <input type="submit" name="submit" className="btn btn-primary pull-right" value="Submit" />
                                </div>
                            </form>

                        </div>
                    </div>
            </div>
        )
    }
}

export default Form
