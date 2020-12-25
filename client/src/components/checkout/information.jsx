import React from 'react';
import images from '../images/images.jsx';
import { Link } from 'react-router-dom';

import SelectUSState from 'react-select-us-states';
import { withRouter } from 'react-router-dom';

class Information extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { history } = this.props;
    history.push('/shipping');
  }

  render() {
    return (

      <div className="wrapper" style={{backgroundColor:'beige'}}>
        <div className="info-container" style={{padding:'20px'}}>
        <div className="checkout-header" style={{fontSize:'14px', marginBottom:'25px'}}>
          <h3>Granola Greg</h3>
          <span>Information</span> <span style={{color:'grey'}}> > Shipping > Payment > Confirmation</span>
        </div>



          <div className="row">
            <div className="col">
            <form>
            <div className="form-group">
              <label for="emailInput">Contact Information</label>
              <input type="email" id="emailInput" className="form-control" placeholder="Enter your email"></input>
            </div>



            <fieldset className="form-group">
              <label>Delivery Method</label>
              <div className="form-check">
                <input className="form-check-input" id="deliveryRadio1" name="deliveryRadio" type="radio" value="ship" checked></input>
                <label className="form-check-label" for="deliveryRadio1">Ship To Me</label>
              </div>

              <div className="form-check">
                <input className="form-check-input" id="deliveryRadio2" name="deliveryRadio" type="radio" value="pickUp"></input>
                <label className="form-check-label" for="deliveryRadio2">Pick Up</label>
              </div>

            </fieldset>





            <div className="form-group">
              <label for="firstNameInput">Shipping address</label>
              <div className="row">
                <div className="col"><input type="text" id="firstNameInput" className="form-control" placeholder="First Name"></input></div>
                <div className="col"><input type="text" id="lastNameInput" className="form-control" placeholder="Last Name"></input></div>
              </div>
              <input type="text" id="addressInput" className="form-control" placeholder="Address"></input>
              <input type="text" id="addressOptInput" className="form-control" placeholder="Apartment,Suite (optional)"></input>
              <input type="text" id="cityInput" className="form-control" placeholder="City"></input>

              <div className="row">
                <div className="col"> <SelectUSState id="state" className='state-select'/> </div>
                <div className="col">
                  <select id="countryInput" className="form-control" placeholder="Country">
                    <option>U.S.A</option>
                  </select>
                </div>
                <div className="col"><input type="text" id="zipCodeInput" className="form-control" placeholder="Zip Code"></input></div>
              </div>
            </div>

            <div className="row">
              <div className="col"><Link to='/shop'> &lt; Back to the Shop</Link></div>

              <div className="col"><button onClick={this.handleClick} className="checkout-btn">continue to shipping</button></div>
            </div>

          </form>

            </div>



            <div className="col-5" style={{minHeight:'100vh', borderLeft:'1px solid lightgrey'}}>
            <div style={{paddingRight:'50px', paddingLeft:'50px'}}>
              <h3>Cart</h3>

              <div className="row" style={{marginTop:'30px', padding:'10px'}}>
                <img src={images[5]} className="col"></img>
                <h4 className="col">Granola</h4>
                <h6 className="col">0.0002 bitcoins</h6>
              </div>
              <hr />
              <div className="row" style={{marginTop:'30px', padding:'10px'}}>
                <p className="col">Subtotal</p>
                <p className="col">0.0002 bitcoins</p>
              </div>
            </div>


          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Information);