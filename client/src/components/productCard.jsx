import React from 'react';
import Card from 'react-bootstrap/Card';

const ProductCard = ({ product, clickHandler }) => {

  var handleClick = (e) => {
    e.preventDefault;
    clickHandler(product.productid);
  }

  return(
    <Card onClick={handleClick}>
      <Card.Img variant="top" src={product.images}/>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="shop-product-description">
          {product.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;