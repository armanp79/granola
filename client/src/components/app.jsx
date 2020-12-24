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

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;