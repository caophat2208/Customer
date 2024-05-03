import axios from "axios";
import React, { Component } from "react";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "",
      txtPassword: "",
      txtName: "",
      txtPhone: "",
      txtEmail: "",
    };
  }
  render() {
    return (
      <div className="container">
        <div className="align-center">
          <div className="form-container">
            <div className="image">
              <img
                src="https://i.pinimg.com/originals/59/14/bc/5914bc09fbf69f994894ddf60d36a22f.jpg"
                alt=""
                width="230px"
                height="443px"
              ></img>
            </div>
            <form className="detailform">
              <h1>Sign up Form</h1>
              <label>Username</label>
              <input
                type="text"
                value={this.state.txtUsername}
                onChange={(e) => {
                  this.setState({ txtUsername: e.target.value });
                }}
              />

              <label>Password</label>
              <input
                type="password"
                value={this.state.txtPassword}
                onChange={(e) => {
                  this.setState({ txtPassword: e.target.value });
                }}
              />

              <label>Name</label>
              <input
                type="text"
                value={this.state.txtName}
                onChange={(e) => {
                  this.setState({ txtName: e.target.value });
                }}
              />

              <label>Phone</label>
              <input
                type="tel"
                value={this.state.txtPhone}
                onChange={(e) => {
                  this.setState({ txtPhone: e.target.value });
                }}
              />

              <label>Email</label>
              <input
                type="email"
                value={this.state.txtEmail}
                onChange={(e) => {
                  this.setState({ txtEmail: e.target.value });
                }}
              />

              <button type="submit" onClick={(e) => this.btnSignupClick(e)}>
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  // event - handlers
  btnSignupClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    const name = this.state.txtName;
    const phone = this.state.txtPhone;
    const email = this.state.txtEmail;
    if (username && password && name && phone && email) {
      const account = {
        username: username,
        password: password,
        name: name,
        phone: phone,
        email: email,
      };
      this.apiSignup(account);
    } else {
      alert("Please input username and password and name and phone and email ");
    }
  }
  // apis
  apiSignup(account) {
    axios.post("/api/customer/signup", account).then((res) => {
      const result = res.data;
      alert(result.message);
    });
  }
}
export default Signup;
