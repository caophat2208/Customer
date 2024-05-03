import axios from "axios";
import React, { Component } from "react";
class Active extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtID: "",
      txtToken: "",
    };
  }
  render() {
    return (
      <div className="container">
        <div className="align-center">
          <div className="form-container">
            <div className="image">
              <img
                src="https://i.pinimg.com/originals/b3/01/e6/b301e6ea3e8b0632c158010d38d21a60.jpg"
                alt=""
                width="200px"
              ></img>
            </div>
            <form className="detailform">
              <h1>Active Account</h1>
              <label>ID</label>
              <input
                type="text"
                value={this.state.txtID}
                onChange={(e) => {
                  this.setState({ txtID: e.target.value });
                }}
              />

              <label>Token</label>
              <input
                type="text"
                value={this.state.txtToken}
                onChange={(e) => {
                  this.setState({ txtToken: e.target.value });
                }}
              />

              <button
                type="submit"
                value="ACTIVE"
                onClick={(e) => this.btnActiveClick(e)}
              >
                ACTIVE
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  // event - handlers
  btnActiveClick(e) {
    e.preventDefault();
    const id = this.state.txtID;
    const token = this.state.txtToken;
    if (id && token) {
      this.apiActive(id, token);
    } else {
      alert("Please input id and token ");
    }
  }
  // apis
  apiActive(id, token) {
    const body = { id: id, token: token };
    axios.post("/api/customer/active", body).then((res) => {
      const result = res.data;
      if (result) {
        alert("Active Success!");
      } else {
        alert("Something went wrong!");
      }
    });
  }
}
export default Active;
