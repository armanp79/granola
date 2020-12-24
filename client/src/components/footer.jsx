import React from 'react';
import { SocialIcon } from 'react-social-icons';
import {  Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="nav-bar-container-footer">
          <nav class="row">
              <span class="col-sm-2">
                <Link to="/">Home</Link>
              </span>
              <span class="col-sm-2">
                <Link to="/about">About</Link>
              </span>
              <span class="col-sm-2">
                <Link to="/shop">Shop</Link>
              </span>
              <span class="col-sm-2">
                <Link to="/blog">Blog</Link>
              </span>
              <span class="col-sm-2">
                <Link to="/contact">Contact</Link>
              </span>
          </nav>
        </div>
        <div className="social-links">
          <SocialIcon url="http://twitter.com/" bgColor="white" fgColor="black"/>
          <SocialIcon url="http://facebook.com/" bgColor="white" fgColor="black"/>
          <SocialIcon url="http://instagram.com/" bgColor="white" fgColor="black"/>
          <SocialIcon url="http://snapchat.com/" bgColor="white" fgColor="black"/>
        </div>
      </footer>
    );
  }
}

export default Footer;