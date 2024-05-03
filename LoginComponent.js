import axios from "axios";
import React, { Component } from "react";
import MyContext from "../contexts/MyContext";
import withRouter from "../utils/withRouter";
class Login extends Component {
  static contextType = MyContext; // using this . context to access global state
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "phat",
      txtPassword: "123",
    };
  }
  render() {
    return (
      <div className="container">
        <div className="align-center">
          <div className="form-container">
            <div className="image">
              <img
                src="https://i.pinimg.com/236x/2f/c9/1f/2fc91f1e532689a117a5c71c07acf70f.jpg"
                alt=""
              ></img>
            </div>
            <form className="detailform">
              <h1>Login Form</h1>
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

              <button
                type="submit"
                value="LOGIN"
                onClick={(e) => this.btnLoginClick(e)}
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  // event - handlers
  btnLoginClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    if (username && password) {
      const account = { username: username, password: password };
      this.apiLogin(account);
    } else {
      alert("Please input username and password ");
    }
  }
  // apis
  apiLogin(account) {
    axios.post("/api/customer/login", account).then((res) => {
      const result = res.data;
      if (result.success === true) {
        this.context.setToken(result.token);
        this.context.setCustomer(result.customer);
        this.props.navigate("/home");
      } else {
        alert(result.message);
      }
    });
  }
}
export default withRouter(Login);
