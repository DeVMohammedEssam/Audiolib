import React, { Component } from 'react'
import RequestsCard from "./layout/RequestsCard"
import axios from "axios"
import config from "../config";

export default class Requests extends Component {
  state={
    loaded:false,
    messages:[]
  }
  componentDidMount=()=>{
    axios.get(`${config.serverURL}/api/messages`).then((response)=>{
        this.setState({loaded:true,messages:response.data.messages})
    })
  }
  render() {
    return (
  
        <div className="requests">

          {this.state.loaded?
          <div className="row">
            {this.state.messages.map((message)=>(
              <div className="col-12">
              <RequestsCard email={message.email} phone={message.phone} name={message.name} message={message.text} />
            </div>
            ))}
            
          </div>:<div className="loader">
                                  <img src="/805(2).gif" />

  </div> }


        </div>

   
    )
  }
}
