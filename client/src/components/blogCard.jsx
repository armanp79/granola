import React from 'react';
import Card from 'react-bootstrap/Card';

const BlogCard = ({ post }) => {
  return(
      <Card>
        <Card.Img variant="top" src={post.images}/>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
            {post.description}
          </Card.Text>
        </Card.Body>
      </Card>
  );
}

export default BlogCard;

