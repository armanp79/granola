import React from 'react';
import { images } from '../images/images.jsx';
import { Link, withRouter } from 'react-router-dom';

class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { history } = this.props;
    history.push('/payment');
  }

  render() {
    return(
      <div className="wrapper" style={{backgroundColor:'beige'}}>
      <div className="info-container" style={{padding:'20px'}}>

        <div className="row">
          <div className="col">

            <div className="checkout-header" style={{fontSize:'14px', marginBottom:'25px'}}>
              <h3>Granola Greg</h3>
              <span style={{color:'grey'}}>Information > </span> <span>Shipping</span> <span style={{color:'grey'}}> > Payment > Confirmation</span>
            </div>


            <div style={{marginBottom:'10px'}}><h4>Shipping To:</h4> 15265 Charlotte Ave., San Jose, CA, 95124</div>
          <form>
          <fieldset className="form-group" style={{padding:'5px', border:'1px solid'}}>
            <label>Shipping Method</label>
            <div className="form-check">
              <input className="form-check-input" id="shippingRadio1" name="shippingRadio" type="radio" value="ship" checked></input>
              <label className="form-check-label" for="shippingRadio1">Ground Shipping (USPS or UPS)</label>
            </div>
          </fieldset>


          <div className="row">
            <div className="col"><Link to='/checkout'> &lt; Return to information</Link></div>

            <div className="col"><button onClick={this.handleClick} className="checkout-btn">continue to payment</button></div>
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

export default withRouter(Shipping);