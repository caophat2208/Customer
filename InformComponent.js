import React, { Component } from "react";
import { Link } from "react-router-dom";
import MyContext from "../contexts/MyContext";
class Inform extends Component {
  static contextType = MyContext; // using this . context to access global state
  render() {
    return (
      <div className="border-bottom">
        <div className="float-left">
          {this.context.token === "" ? (
            <div>
              {" "}
              <Link className="category" to="/login">
                {" "}
                Login{" "}
              </Link>{" "}
              |{" "}
              <Link className="category" to="/signup">
                {" "}
                Sign - up{" "}
              </Link>{" "}
              |{" "}
              <Link className="category" to="/active">
                {" "}
                Active{" "}
              </Link>{" "}
            </div>
          ) : (
            <div>
              {" "}
              Hello{" "}
              <b>
                <i style={{ color: "orange" }}>{this.context.customer.name}</i>
              </b>{" "}
              |{" "}
              <Link
                className="category"
                to="/home"
                onClick={() => this.lnkLogoutClick()}
              >
                {" "}
                Logout{" "}
              </Link>{" "}
              |{" "}
              <Link className="category" to="/myprofile">
                {" "}
                My profile{" "}
              </Link>{" "}
              |{" "}
              <Link className="category" to="/myorders">
                {" "}
                My orders{" "}
              </Link>{" "}
            </div>
          )}
        </div>
        <div className="float-right">
          <Link className="category" to="/mycart">
            {" "}
            <i
              style={{ fontSize: "25px" }}
              class="fa fa-shopping-cart"
              aria-hidden="true"
            ></i>{" "}
          </Link>{" "}
          have <b>{this.context.mycart.length}</b> items
        </div>
        <div className="float-clear" />
      </div>
    );
  }
  // event - handlers
  lnkLogoutClick() {
    this.context.setToken("");
    this.context.setCustomer(null);
    this.context.setMycart([]);
  }
}
export default Inform;
