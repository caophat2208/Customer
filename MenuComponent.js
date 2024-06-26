import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import withRouter from "../utils/withRouter";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      txtKeyword: "",
    };
  }
  render() {
    const cates = this.state.categories.map((item) => {
      return (
        <li key={item._id} className="menu">
          <Link className="category" to={"/product/category/" + item._id}>
            {item.name}{" "}
          </Link>{" "}
        </li>
      );
    });
    return (
      <div className="border-bottom">
        <div className="float-left">
          <ul className="menu">
            <li className="menu">
              <Link className="category" to="/">
                {" "}
                Home{" "}
              </Link>
              {""}
            </li>
            <li className="dropdown menu">
              <button class="dropbtn">MODELS</button>
              <ul className="dropdown-content">{cates}</ul>
            </li>
            <li className="menu">
              <Link className="category" to="/aboutus">
                About us
              </Link>
            </li>
          </ul>
        </div>
        <div className="float-right">
          <form className="search">
            <input
              type="search"
              placeholder="Enter keyword"
              className="keyword"
              value={this.state.txtKeyword}
              onChange={(e) => {
                this.setState({ txtKeyword: e.target.value });
              }}
            />
            <input
              className="btnsearch"
              type="submit"
              value="SEARCH"
              onClick={(e) => this.btnSearchClick(e)}
            />
          </form>
        </div>
        <div className="float-clear" />
      </div>
    );
  }
  componentDidMount() {
    this.apiGetCategories();
  }
  // apis
  apiGetCategories() {
    axios.get("/api/customer/categories").then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }
  // event - handlers
  btnSearchClick(e) {
    e.preventDefault();
    this.props.navigate("/product/search/" + this.state.txtKeyword);
  }
}
export default withRouter(Menu);
