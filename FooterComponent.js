import React, { Component } from "react";
import MyContext from "../contexts/MyContext";
import { Link } from "react-router-dom";

class Footer extends Component {
  static contextTypes = MyContext;
  render() {
    return (
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            Optimus<span>Faker</span>
          </h3>

          <p class="footer-links">
            <Link to="/home">Home</Link> |{" "}
            <a
              href="https://www.facebook.com/profile.php?id=100009405489283"
              target="__blank"
            >
              About
            </a>{" "}
            |{" "}
            <a
              href="https://www.facebook.com/"
              rel="noreferrer"
              target="_blank"
            >
              Contact
            </a>
          </p>

          <p class="footer-company-name">
            Copyright © 2023 <strong>OptimusFaker</strong> All rights reserved
          </p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>Ho Chi Minh City</span>
              Van Lang University
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+82 090**22*3*</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a
                href="https://mail.google.com/"
                rel="noreferrer"
                target="_blank"
              >
                tathienbadao@hotmail.com
              </a>
            </p>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Welcome to <strong>OptimusFaker</strong> Software Solutions, where
            innovation meets excellence! We are a leading software company
            committed to providing cutting-edge solutions for businesses and
            individuals.
          </p>
          <div class="footer-icons">
            <a id="fb" href="https://facebook.com/" target="__blank">
              <i class="fa fa-facebook"></i>
            </a>
            <a
              id="ig"
              href="https://www.instagram.com/skuukzky/"
              target="__blank"
            >
              <i class="fa fa-instagram"></i>
            </a>
            <a id="twitter" href="https://twitter.com/" target="__blank">
              <i class="fa fa-twitter"></i>
            </a>
            <a id="yt" href="https://youtube.com/" target="__blank">
              <i class="fa fa-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
