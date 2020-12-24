import React from 'react';
import Footer from './footer.jsx';
import Header from './header.jsx';
import images from './images/images.jsx';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

import {  Link, useHistory } from "react-router-dom";

const Shop = () => {

  const history = useHistory();

  var handleClick = (e) => {
    e.preventDefault();
    history.push('/product')
  }

  return (
    <div className="wrapper">
      <Header />

      <div className="shop-container" style={{minHeight:'70vh', marginTop: '110px'}}>
        <div>Shop</div>
        <div className="shop-card-container">
          <Card style={{margin:'15px', width:'30%'}} onClick={handleClick}>
            <Card.Img variant="top" src={images[5]}/>
            <Card.Body>
              <Card.Title>Granola</Card.Title>
              <Card.Text>
                Enter Product Description
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{margin:'15px', width:'30%'}} onClick={handleClick}>
            <Card.Img variant="top" src={images[5]}/>
            <Card.Body>
              <Card.Title>Granola</Card.Title>
              <Card.Text>
                Enter Product Description
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{margin:'15px', width:'30%'}} onClick={handleClick}>
            <Card.Img variant="top" src={images[5]}/>
            <Card.Body>
              <Card.Title>Granola</Card.Title>
              <Card.Text>
                Enter Product Description
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Shop;