import axios from "axios";
import React, { Component } from "react";
import MyContext from "../contexts/MyContext";
class Login extends Component {
  static contextType = MyContext; // using this . context to access global state
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "admin",
      txtPassword: "123",
    };
  }
  render() {
    if (this.context.token === "") {
      return (
        <div className="align-valign-center">
          <h2 className="text-center"> ADMIN LOGIN </h2>
          <div className="image-container">
            <img src="https://img4.thuthuatphanmem.vn/uploads/2020/04/28/hinh-nen-4k-sieu-moto_025908041.jpg" 
            width="1830px"
            height="843px"
            alt="" />
          </div>
          
         <div className="form-overlay">
          <form>
            <table className="align-center">
              <tbody>
                <tr>
                  <td> Username </td>

                  <td>
                    {" "}
                    <input
                      type="text"
                      value={this.state.txtUsername}
                      onChange={(e) => {
                        this.setState({ txtUsername: e.target.value });
                      }}
                    />{" "}
                  </td>
                </tr>
                <tr>
                  <td> Password </td>
                  <td>
                    {" "}
                    <input
                      type="password"
                      value={this.state.txtPassword}
                      onChange={(e) => {
                        this.setState({ txtPassword: e.target.value });
                      }}
                    />{" "}
                  </td>
                </tr>
                <tr>
                  <td> </td>
                  <td>
                    {" "}
                    <input
                      className="button"
                      type="submit"
                      value="LOGIN"
                      onClick={(e) => this.btnLoginClick(e)}
                    />{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          </div>  
        </div>
      );
    }
    return <div />;
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
    axios.post("/api/admin/login", account).then((res) => {
      const result = res.data;
      if (result.success === true) {
        this.context.setToken(result.token);
        this.context.setUsername(account.username);
      } else {
        alert(result.message);
      }
    });
  }
}
export default Login;
