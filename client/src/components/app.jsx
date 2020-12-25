import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Home from './home.jsx';
import About from './about.jsx';
import Shop from './shop.jsx';
import Blog from './blog.jsx';
import Contact from './contact.jsx';
import ProductPage from './products/productPage.jsx';
import Cart from './cart.jsx';
import Information from './checkout/information.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({
      show: true
    });
  }

  hideModal() {
    this.setState({
      show: false
    });
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Cart
            show={this.state.show}
            hideModal={this.hideModal}
          />
          <div className="nav-bar-container">
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
                <span class="col-sm-2">
                  <button style={{background:'transparent', border:'none'}} onClick={this.showModal}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
                  </button>
                </span>

            </nav>
          </div>

        </div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/product">
            <ProductPage />
          </Route>
          <Route path="/checkout">
            <Information />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;