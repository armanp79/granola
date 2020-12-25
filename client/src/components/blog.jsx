import React from 'react';
import images from './images/images.jsx';

import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';

class Blog extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="blog-container" style={{minHeight:'70vh', marginTop: '110px'}}>
          <div style={{textAlign:'center'}}>
            <h1>The Blog</h1>
          </div>
          <CardColumns>
            <Card>
              <Card.Img variant="top" src={images[0]}/>
              <Card.Body>
                <Card.Title>Blog title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={images[3]}/>
              <Card.Body>
                <Card.Title>Blog title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={images[2]}/>
              <Card.Body>
                <Card.Title>Blog title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>

          <CardColumns>
            <Card>
              <Card.Img variant="top" src={images[1]}/>
              <Card.Body>
                <Card.Title>Blog title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={images[0]}/>
              <Card.Body>
                <Card.Title>Blog title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={images[4]}/>
              <Card.Body>
                <Card.Title>Blog title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>

          <CardColumns>
            <Card>
              <Card.Img variant="top" src={images[4]}/>
              <Card.Body>
                <Card.Title>Blog title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={images[2]}/>
              <Card.Body>
                <Card.Title>Blog title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={images[1]}/>
              <Card.Body>
                <Card.Title>Blog title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>

        </div>
      </div>
    );
  }
}

export default Blog;