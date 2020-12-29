import React from 'react';

import { homeImages } from './images/images.jsx';
import { Link } from 'react-router-dom';


class Home2 extends React.Component {

  render() {
    return (
      <div className='home-container'>
        <h1 className="home-title">Granola Greg Website</h1>

        <div className="home" style={{marginTop:'150px'}}>
        <div class="row">
          <div class="column">
            <img className="home-image2" src='brighton.jpg'/>
            <img className="home-image2" src={homeImages[1]}/>
            <img className="home-image2" src={homeImages[2]}/>
            <img className="home-image2" src={homeImages[3]}/>
            <img className="home-image2" src={homeImages[4]}/>
            <img className="home-image2" src={homeImages[5]}/>
            <img className="home-image2" src={homeImages[6]}/>
            <img className="home-image2" src={homeImages[7]}/>
            <img className="home-image2" src={homeImages[8]}/>
          </div>
          <div class="column">
            <img className="home-image2" src={homeImages[1]}/>
            <img className="home-image2" src={homeImages[6]}/>
            <img className="home-image2" src={homeImages[7]}/>
            <img className="home-image2" src={homeImages[8]}/>
            <img className="home-image2" src={homeImages[4]}/>
            <img className="home-image2" src={homeImages[5]}/>
            <img className="home-image2" src='brighton.jpg'/>
            <img className="home-image2" src={homeImages[2]}/>
            <img className="home-image2" src={homeImages[3]}/>
          </div>
          <div class="column">
            <img className="home-image2" src='brighton.jpg'/>
            <img className="home-image2" src={homeImages[1]}/>
            <img className="home-image2" src={homeImages[2]}/>
            <img className="home-image2" src={homeImages[3]}/>
            <img className="home-image2" src={homeImages[4]}/>
            <img className="home-image2" src={homeImages[5]}/>
            <img className="home-image2" src={homeImages[6]}/>
            <img className="home-image2" src={homeImages[7]}/>
            <img className="home-image2" src={homeImages[8]}/>
          </div>
          <div class="column">
          <img className="home-image2" src={homeImages[1]}/>
            <img className="home-image2" src={homeImages[6]}/>
            <img className="home-image2" src={homeImages[7]}/>
            <img className="home-image2" src={homeImages[8]}/>
            <img className="home-image2" src={homeImages[4]}/>
            <img className="home-image2" src={homeImages[5]}/>
            <img className="home-image2" src='brighton.jpg'/>
            <img className="home-image2" src={homeImages[2]}/>
            <img className="home-image2" src={homeImages[3]}/>
          </div>
          <div style={{padding:'100px', width:'100%',textAlign:'center'}}><Link to='/contact'>Wanna get featured? Send us a picture of you and your granola</Link></div>
        </div>

        </div>
      </div>
    );
  }
}

export default Home2;