import React, { Component } from 'react'
import axios from "axios"
import { connect } from "react-redux"
import { login } from "../redux/actions/user"
import config from "../config"
class Login extends Component {
  constructor(props) {
    super(props)
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.props)
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    axios.post(`${config.serverURL}/api/user/login`, { data: { email, password } }).then((response) => {

      let data = response.data
      console.log("PRESSED ", data)
      if (data.success) {
        localStorage.setItem("userToken", data.token)
        //  localStorage.setItem("userToken",data.token);
        this.props.login();
      } else {

      }
    })
  }
  render() {
    return (
      <div className="container">
        <div className="login">
          <form onSubmit={this.onSubmit} >
            <div class="form-group">

              <input type="email" class="form-control form-control-lg" id="email" aria-describedby="emailHelp" placeholder="email.." />

            </div>
            <div class="form-group">

              <input type="password" class="form-control form-control-lg" id="password" placeholder="Password..." />
            </div>

            <button type="submit" class="btn btn-primary btn-lg">ادخل الان</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => (

  {
    login: () => { dispatch(login()) }

  }
)


export default connect(undefined, mapDispatchToProps)(Login)
