import React from 'react';
import Card from 'react-bootstrap/Card';

const ProductCard = ({ product }) => {
  return(
      <Card>
        <Card.Img variant="top" src={product.images}/>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description.slice(0,50)}...
          </Card.Text>
        </Card.Body>
      </Card>
  );
}

export default ProductCard;