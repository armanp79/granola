import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Nav from './navigation.jsx';
import Home from './home.jsx';
import About from './about.jsx';
import Shop from './shop.jsx';
import Blog from './blog.jsx';
import Contact from './contact.jsx';
import ProductPage from './products/productPage.jsx';
import Cart from './cart.jsx';
import Information from './checkout/information.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Shipping from './checkout/shipping.jsx';
import Payment from './checkout/payment.jsx';
import Confirmation from './checkout/confirmation.jsx';

import Home2 from './home2.jsx';

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
        </div>
        <Switch>
          <Route path="/about">
            <Nav showModal={this.showModal} />
            <Header />
            <About />
            <Footer />
          </Route>
          <Route path="/shop">
            <Nav showModal={this.showModal} />
            <Header />
            <Shop />
            <Footer />
          </Route>
          <Route path="/blog">
            <Nav showModal={this.showModal} />
            <Header />
            <Blog />
            <Footer />
          </Route>
          <Route path="/contact">
            <Nav showModal={this.showModal} />
            <Header />
            <Contact />
            <Footer />
          </Route>
          <Route path="/product">
            <Nav showModal={this.showModal} />
            <Header />
            <ProductPage />
            <Footer />
          </Route>
          <Route path="/checkout">
            <Information />
            <Footer />
          </Route>
          <Route path="/shipping">
            <Shipping />
            <Footer />
          </Route>
          <Route path="/payment">
            <Payment />
            <Footer />
          </Route>
          <Route path="/confirmation">
            <Confirmation />
          </Route>
          <Route path="/">
            <Nav showModal={this.showModal} />
            <Header />
            <Home2 />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;