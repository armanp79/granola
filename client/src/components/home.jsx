import React from 'react';

import images from './images/images.jsx';
import Carousel from 'react-bootstrap/Carousel';

class Home extends React.Component {

  render() {
    return (
      <div className='home-container'>
        <img src={"logo.png"} style={{position:'absolute', zIndex: '1', width: '350px', height: '200px'}} />
        <h1 className="home-title">Granola Greg Website</h1>

        <div className="home">
          <Carousel>
            <Carousel.Item interval={6000}>
              <img
                className="d-block w-100 home-image"
                src={images[0]}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={6000}>
              <img
                className="d-block w-100 home-image"
                src={images[1]}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={6000}>
              <img
                className="d-block w-100 home-image"
                src={images[2]}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={6000}>
              <img
                className="d-block w-100 home-image"
                src={images[3]}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>

        </div>
      </div>
    );
  }
}

export default Home;