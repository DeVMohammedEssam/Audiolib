
import React, { Component } from 'react';
class Contact extends Component {
    state = {
        email: "",
        name: "",
        message: ""
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(() => ({ [name]: value }));

    }
    render() {
        return (
            <div className="Privacy py-5" data-lang="en">
            <div className="container">
                <h1 className="text-center mb-5 display-4 font-weight-bold">
              how to contact us
                 </h1>

                <div className="text-secondary" >
                       <p> <strong>Facebook</strong>: </p>
                      <p>  <strong>youtube</strong>:  </p>
                      <p>  <strong>linkedin</strong>: </p>
                       <p> <strong>twitter</strong>: </p>




                  </div>
                 
                
            </div>
        </div>
        );
    }
}


export default Contact;