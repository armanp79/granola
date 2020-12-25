import React from 'react';
import images from '../images/images.jsx';

class Information extends React.Component {
  render() {
    return (

      <div className="container-fluid">
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
              <div className="col"><select id="stateInput" className="form-control" placeholder="State"></select></div>
              <div className="col"><select id="countryInput" className="form-control" placeholder="Country"></select></div>
              <div className="col"><input type="text" id="zipCodeInput" className="form-control" placeholder="Zip Code"></input></div>
            </div>
          </div>

          <input type="submit" value="continue to shipping"></input>


        </form>

          </div>



          <div className="col">
            <div style={{paddingRight:'150px', paddingLeft:'50px'}}>
              <h3>Cart</h3>

              <div className="row" style={{padding:'50px'}}>
                <img src={images[5]} className="col"></img>
                <h4 className="col">Granola</h4>
                <h4 className="col">0.0002 bitcoins</h4>
              </div>
              <hr />
              <div className="row" style={{padding:'30px'}}>
                <p className="col">Subtotal</p>
                <p className="col">0.0002 bitcoins</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  }
}

export default Information;