import React from 'react';
import Footer from './footer.jsx';

import {  Link } from "react-router-dom";
import Header from './header.jsx';


class About extends React.Component {


  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="about-container" style={{minHeight:'70vh', marginTop: '110px'}}>
          <h1 style={{textAlign: 'center'}}>The man behind the granola</h1> <br />


          <div class="row">
            <div class="col-md-6 col-xs-6 text-center">
              <img src="https://i.kym-cdn.com/entries/icons/facebook/000/010/319/redneck.jpg" style={{width:"450px", height:"350px"}}/>
            </div>
            <div class="col-md-6 col-xs-6">
              <p>We love food. We love pursuing our passions. And we love feeling energized. </p>
              <p>Over the years, we kept trying different foods that promised to keep us going, to nourish us throughout the day. Juices gave a big energy spike, followed by a quick crash. Bars were chock-full of sugar or highly processed. </p>
              <p>And eating whole fruits and vegetables just wasn’t practical – sticky hands and leftover peels made it too hard when running from meeting to meeting.</p>
            </div>
          </div>


          <p style={{margin: '70px 70px'}}>So we decided to create the kind of food that we’d always wanted – something that made it easy to get all the benefits of whole vegetables and fruits. Something where you didn’t have to scrutinize the label or have second thoughts. Something that tasted great, because there was great stuff in it. Something so simple, it was obvious. Something bright. We also believe that business can make the world a better place. We’re committed to using organic ingredients, to treating all stakeholders with respect and dignity, and to sourcing from local suppliers and partners as much as possible. We aim to grow responsibly and to protect the planet as we do so.</p>

          <p style={{margin: '15px', marginBottom: '30px', textAlign: 'center', fontSize:'28px', fontWeight:'lighter', fontStyle:'italic'}}>"I'm Granola Greg, I do whatever the fuck I want"</p>
          <p style={{textAlign: 'center'}}>- Granola Greg</p>

          <div style={{textAlign: 'center', margin: '30px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyf-ilS7SfyAWeqppwCh10npWvdN43rNjAQg&usqp=CAU"  style={{width:"800px", height:"300px"}}/>
          </div>
          <br />

          <div class="row">
            <div class="col-md-6 col-xs-6 text-right">
              <p>We love food. We love pursuing our passions. And we love feeling energized. Over the years, we kept trying different foods that promised to keep us going, to nourish us throughout the day.</p>
              <p>Juices gave a big energy spike, followed by a quick crash. Bars were chock-full of sugar or highly processed. And eating whole fruits and vegetables just wasn’t practical – sticky hands and leftover peels made it too hard when running from meeting to meeting.</p>
            </div>
            <div class="col-md-6 col-xs-6 text-center">
              <img src="https://peasandcrayons.com/wp-content/uploads/2017/03/healthy-homemade-granola-recipe-naturally-sweet-peasandcrayons-1202.jpg" style={{width:"250px", height:"350px"}}/>
            </div>
          </div>

          <div style={{textAlign: 'center', padding:'50px'}}>
            <Link to="/shop">Buy Some Granola</Link>
          </div>

          <div style={{textAlign: 'center', padding:'50px'}}>
            Wanna talk to Granola Greg?
            <Link to="/contact">Send him a message!</Link>
          </div>



        </div>
        <Footer />
      </div>
    );
  }
}

export default About;